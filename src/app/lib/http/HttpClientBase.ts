import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  IgnoreService,
  IResponse,
  Load,
  ErrorFunction,
  LogFunction,
} from './@types';
import { error$, loader$ } from './observable';

type AxiosConfig = AxiosRequestConfig & { loaderId: string };

const compare = (name?: string, input?: string) =>
  (input ?? '').indexOf(name ?? '') !== -1;

const isIgnoreService = (services: IgnoreService[], url?: string) => {
  return services.some((ignore) => compare(ignore.name, url));
};

const checkIgnoreLoading = (payload: {
  ignoreLoadingRequest: IgnoreService[];
  url?: string;
  func: Function;
}) => {
  const ignoreLoadingService = isIgnoreService(
    payload.ignoreLoadingRequest,
    payload.url
  );

  if (!ignoreLoadingService) {
    payload.func();
  }
};
export class HttpClientBase {
  private _api: AxiosInstance;

  public constructor(
    getAccessToken: () => Promise<string>,
    version: string = '1.0.0',
    timeout: number = 30 * 1000,
    ignoreLoadingRequest: IgnoreService[] = [],
    ignoreErrorRequest: IgnoreService[] = [],
    onError?: ErrorFunction,
    onLog?: LogFunction
  ) {
    this._api = axios.create();
    this._api.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const loaderId = uuidv4();
        const jwtToken = await getAccessToken();

        config.headers['Content-Type'] =
          config.headers['Content-Type'] || 'application/json';
        config.headers['app-version'] = version;
        config.headers['Authorization'] = 'Bearer ' + jwtToken;
        config.headers['Access-Control-Allow-Origin'] = true;

        // config.headers = {
        //   'content-Type': 'application/json',
        //   'app-version': version,
        //   Authorization: 'Bearer ' + jwtToken,
        //   'Access-Control-Allow-Origin': true,
        //   ...config.headers,
        // };
        config.timeout = timeout;
        (config as AxiosConfig).loaderId = loaderId;

        checkIgnoreLoading({
          ignoreLoadingRequest: ignoreLoadingRequest,
          url: config.url,
          func: () =>
            loader$.next({
              type: Load.Loading,
              loaderId,
            }),
        });

        return config;
      }
    );

    this._api.interceptors.response.use(
      (response: AxiosResponse) => {
        checkIgnoreLoading({
          ignoreLoadingRequest: ignoreLoadingRequest,
          url: response?.config.url,
          func: () =>
            loader$.next({
              type: Load.Loaded,
              loaderId: (response.config as AxiosConfig).loaderId,
            }),
        });
        return response;
      },
      (error: AxiosError) => {
        const { response } = error;

        //ignoreLoadingRequest check http Method
        checkIgnoreLoading({
          ignoreLoadingRequest: ignoreLoadingRequest,
          url: response?.config.url,
          func: () =>
            loader$.next({
              type: Load.Loaded,
              loaderId: (error?.config as AxiosConfig)?.loaderId,
            }),
        });

        if (!response) {
          // status code 600 for handle axios exception
          error$.next({ statusCode: 600, response: error });
          return Promise.reject(error);
        }

        if (onLog) onLog(response);

        // this.runAppInsigth(
        //   response.data,
        //   response.config?.url ?? "",
        //   response.config.data
        // );

        // const ignore = isIgnoreService(
        //   ignoreServiceRequest,
        //   response.config.url
        // );
        // const serviceError = response.status >= 500 && response.status <= 599;
        // const unauthroize = response.status === 401;
        // if (unauthroize && !ignore) {
        //   error$.next({ statusCode: 401 });
        // }
        // if (serviceError && !ignore) {
        //   error$.next({ statusCode: 500 });
        // }

        if (!response) return Promise.reject(error);

        // this.runAppInsigth(
        //   response.data,
        //   response.config?.url ?? "",
        //   response.config.data
        // );

        const ignore = isIgnoreService(ignoreErrorRequest, response.config.url);
        if (response.status >= 400 && response.status <= 599 && !ignore) {
          error$.next({ statusCode: response.status, response: error });
        }
        // const serviceError = response.status >= 500 && response.status <= 599;
        // const unauthroize = response.status === 401;

        // if (unauthroize && !ignore) {
        //   error$.next({ statusCode: 401, response: error });
        // }
        // if (serviceError && !ignore) {
        //   error$.next({ statusCode: 500, response: error });
        // }

        if (onError) return onError(error);

        return Promise.reject(error.response);
      }
    );
  }

  protected get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._api.get(url, config);
  }

  protected post<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._api.post(url, data, config);
  }

  protected put<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._api.put(url, data, config);
  }

  protected patch<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._api.patch(url, data, config);
  }

  protected delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._api.delete(url, config);
  }

  protected success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  protected getUrlQueryString<T extends object>(params: T) {
    return Object.keys(params)
      .reduce((query, param) => {
        const value = (params as { [key: string]: any })[param];
        if (!value && value !== 0) {
          return `${query}${param}=&`;
        }
        return `${query}${param}=${(params as { [key: string]: any })[param]}&`;
      }, '')
      .slice(0, -1);
  }

  protected getUrlParameter<T extends object>(parameter: T, url: string) {
    Object.entries(parameter).map((e) => {
      const [key, value] = e;
      url = url.replace(`:${key}`, value);
    });
    return url;
  }
}

export const unwrap = async <T>(response: AxiosResponse<IResponse<T>>) =>
  ({
    status: response.data.status,
    data: response.data.data,
    errors: response.data.errors,
  } as IResponse<T>);

export const unwrap2 = async <T>(response: AxiosResponse<IResponse<T>>) =>
  response.status ? response.data.data : response.data.errors;
