import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export enum HttpMethod {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}

// export type HttpClientFactoryType<G, K> = {
//   group: G;
//   apis: Api<K>[];
// };

// export type Api<K> = {
//   key: K;
//   method: HttpMethod;
//   url: string;
//   axiosRequestConfig?: AxiosRequestConfig;
// };

export type None = undefined;

export type Request<Q = undefined, P = undefined, B = undefined> = {
  stringQuery?: Q;
  parameter?: P;
  body?: B;
};

//AxiosResponse
export type ErrorFunction = (error: AxiosError) => Promise<any>;
export type LogFunction = (response: AxiosResponse) => void;

export interface IHttpClientFactory {
  // handler<R, Q, P, B>(
  //   group: unknown,
  //   key: unknown,
  //   request: Request<Q, P, B>
  // ): Promise<AxiosResponse<R, any>>;
  handler<R, Q, P, B>(
    apiURL: string,
    method: HttpMethod,
    request: Request<Q, P, B>,
    config?: AxiosRequestConfig,
    isNotUnwrap?: boolean
  ): Promise<R>;
}

export const FnNone = <T>() => {
  return {} as T;
};

export type HttpDecoratorReq = {
  http: IHttpClientFactory,
  apiUrl: string,
  httpMethod: HttpMethod,
  config?: AxiosRequestConfig,
  isNotUnwrap?: boolean
}

// export const getValue = <T>() => {
//   return {} as T;
// }