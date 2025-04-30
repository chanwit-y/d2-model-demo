import { HttpClientBase, unwrap } from './HttpClientBase';
import {
  IgnoreService,
  LogFunction,
  ErrorFunction,
  HttpMethod,
  Request,
} from './@types';
import { IHttpClientFactory } from './@types/HttpClientType';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// interface ITest {
//   run: () => void;
// }

// class A implements ITest {
//   public run() {
//     console.log('A')
//   }
// }

// class B implements ITest {
//   public run() {
//     console.log('B')
//   }
// }

// class C {
//   public test(t: ITest) {
//     t.run();
//   }
// }

// class D {
//   private _c = new C();

//   constructor() {
//     this._c.test(new A()) // -> A
//     this._c.test(new B()) // -> B
//   }
// }

export class HttpClientFactory
  extends HttpClientBase
  implements IHttpClientFactory
{
  constructor(
    // private _factory: HttpClientFactoryType<unknown, unknown>[],
    private _baseUrl: string,
    private _getAccessToken: () => Promise<string>,
    version: string = '1.0.0',
    timeout: number = 30 * 1000,
    ignoreLoadingRequest: IgnoreService[] = [],
    ignoreErrorRequest: IgnoreService[] = [],
    private _unwrap?: Function,
    onError?: ErrorFunction,
    onLog?: LogFunction
  ) {
    super(
      _getAccessToken,
      version,
      timeout,
      ignoreLoadingRequest,
      ignoreErrorRequest,
      onError,
      onLog
    );
  }

  // public async handler<R, Q, P, B>(
  //   group: unknown,
  //   key: unknown,
  //   request: Request<Q, P, B>
  // ): Promise<AxiosResponse<R, any>> {
  //   const factory = this._factory.find((f) => f.group === group);
  //   const api = factory?.apis.find((a) => a.key === key);

  //   if (api) {
  //     let url = `${this._baseUrl}${api.url}`;
  //     if (request.parameter) {
  //       // url data is '/user/:userId'
  //       // replace :parameter to value
  //       url = this.getUrlParameter(request.parameter, url);
  //     }

  //     switch (api.method) {
  //       case HttpMethod.GET:
  //         return this.processGet<R, Q, P, B>(api, request, url);
  //       case HttpMethod.POST: {
  //         return await this.post(url, request.body, api.axiosRequestConfig);
  //       }
  //       case HttpMethod.PUT: {
  //         return await this.put(url, request.body, api.axiosRequestConfig);
  //       }
  //       case HttpMethod.PATCH: {
  //         return await this.patch(url, request.body, api.axiosRequestConfig);
  //       }
  //       case HttpMethod.DELETE: {
  //         return await this.delete(url, api.axiosRequestConfig);
  //       }
  //       default:
  //         throw 'error in http client factory!';
  //     }
  //   }
  //   throw 'group or key not found!';
  // }

  public async handler<R, Q, P, B>(
    apiURL: string,
    method: HttpMethod,
    request?: Request<Q, P, B>,
    config?: AxiosRequestConfig,
    isNotUnwrap?: boolean 
  ): Promise<R> {
    // if (api) {
    let url = `${this._baseUrl}${apiURL}`;
    if (request?.parameter) {
      // url data is '/user/:userId'
      // replace :parameter to value
      url = this.getUrlParameter(request.parameter, url);
    }

    let res: AxiosResponse<R, any>;

    switch (method) {
      case HttpMethod.GET:
        res = await this.processGet<R, Q, P, B>(url, request, config);
        break;
      case HttpMethod.POST: {
        res = await this.post(url, request?.body, config);
        break;
      }
      case HttpMethod.PUT: {
        res = await this.put(url, request?.body, config);
        break;
      }
      case HttpMethod.PATCH: {
        res = await this.patch(url, request?.body, config);
        break;
      }
      case HttpMethod.DELETE: {
        res = await this.delete(url);
        break;
      }
      default:
        throw 'error in http client factory!';
    }
    
    return this._unwrap && !isNotUnwrap ? this._unwrap(res.data) : res.data;
    // }
    // throw 'group or key not found!';
  }

  private async processGet<R, Q, P, B>(
    url: string,
    request?: Request<Q, P, B>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R, any>> {
    // is check request send by query string?
    if (request?.stringQuery) {
      const stringQuery = this.getUrlQueryString(request.stringQuery);
      url = `${url}?${stringQuery}`;
    }
    return await this.get(url, config);
  }

  // private async processGet<R, Q, P, B>(
  //   api: Api<unknown>,
  //   request: Request<Q, P, B>,
  //   url: string
  // ): Promise<AxiosResponse<R, any>> {
  //   // is check request send by query string?
  //   // console.log(request.stringQuery)
  //   if (request.stringQuery) {
  //     const stringQuery = this.getUrlQueryString(request.stringQuery);
  //     url = `${url}?${stringQuery}`;
  //   }
  //   // // is check requesr send by parameter?
  //   // if (request.parameter) {
  //   //   // url data is '/user/:userId'
  //   //   // replace :parameter to value
  //   //   url = this.getUrlParameter(request.parameter, url);
  //   // }
  //   return await this.get(url, api.axiosRequestConfig);
  // }

  // public post_<P, B>(group: string, method: string, req: Request<None, P, B>) {}
  // public put_<P, B>(group: string, method: string, req: Request<None, P, B>) {}
  // public patch_<P, B>(
  //   group: string,
  //   method: string,
  //   req: Request<None, P, B>
  // ) {}
  // public delete_<P, B>(
  //   group: string,
  //   method: string,
  //   req: Request<None, P, B>
  // ) {}
}
