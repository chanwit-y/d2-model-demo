import { Static, TArray, TLiteral, TObject, TUndefined, Type } from '@sinclair/typebox';
import { AxiosRequestConfig } from 'axios';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { HttpMethod, IHttpClientFactory, Request as TRequest } from '../http/@types';
// import { HttpMethod, IHttpClientFactory, Request as TRequest } from '@banpugroup/http-client';
// import { HttpMethod, IHttpClientFactory } from './@types';

export { Type as t };

export enum Method {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}

type Context = {
  url: string;
  method: TLiteral;
  response: TObject | TArray | TUndefined;
  query: TObject | TUndefined;
  parameter: TObject | TUndefined;
  body: TObject | TUndefined;
  config?: AxiosRequestConfig;
};

// type Request_<Q, P, B> = Q extends Map
//   ? P extends Map
//     ? B extends Map
//       ? {
//           query: Q;
//           parameter: P;
//           body: B;
//         } // E
//       : {
//           query: Q;
//           parameter: P;
//         } // B
//     : B extends Map
//     ? {
//         query: Q;
//         body: B;
//       } // C
//     : {
//         query: Q;
//       } // A
//   : P extends Map
//   ? B extends Map
//     ? {
//         parameter: P;
//         body: B;
//       } // D
//     : {
//         parameter: P;
//       } // F
//   : B extends Map
//   ? {
//       body: B;
//     } // G
//   : {}; // 0

type Request<Q, P, B, R> = Q extends Map
  ? Request<undefined, P, B, { query: Q }>
  : P extends Map
  ? Request<undefined, undefined, B, R & { parameter: P }>
  : B extends Map
  ? Request<undefined, undefined, undefined, R & { body: B }>
  : R;

type Req<Q, P, B> = {
  query?: Q;
  parameter?: P;
  body?: B;
};

//   query: Q extends object ? Q : never;
//   parameter: P extends object ? P : never;
//   body: B extends object ? B : never;
export type Config = {
  [K: string]: Context;
};

export type Map = { [key: string]: any };

// type Func<R, Q, P, B> = Q extends object
//   ? P extends object
//     ? B extends object
//       ? (query: Q, param: P, body: B) => R
//       : (query: Q, param: P) => R
//     : (query: Q) => R
//   : never;

//-0   mutate: <R, E = unknown>(key: N, options?: MutateOptions<R, E, void>) => UseMutationResult<R, E, void, unknown>
//-A   mutateQ: <R, Q = void, E = unknown>(key: N, options?: MutateOptions<R, E, Q>) => UseMutationResult<R, E, Q, unknown>
//-B   mutateQP: <R, Q, P, E = unknown>(key: N, options?: MutateOptions<R, E, RequestMutateQP<Q, P>>) => UseMutationResult<R, E, RequestMutateQP<Q, P>, unknown>
//-C   mutateQB: <R, Q, B, E = unknown>(key: N, options?: MutateOptions<R, E, RequestMutateQB<Q, B>>) => UseMutationResult<R, E, RequestMutateQB<Q, B>, unknown>
//-D   mutatePB: <R, P, B, E = unknown>(key: N, options?: MutateOptions<R, E, RequestMutatePB<P, B>>) => UseMutationResult<R, E, RequestMutatePB<P, B>, unknown>
//-E   mutateQPB: <R, Q, P, B, E = unknown>(key: N, options?: MutateOptions<R, E, Request<Q, P, B>>) => UseMutationResult<R, E, Request<Q, P, B>, unknown>
//-F   mutateP: <R, P = void, E = unknown>(key: N, options?: MutateOptions<R, E, P>) => UseMutationResult<R, E, P, unknown>
//-G   mutateB: <R, B = void, E = unknown>(key: N, options?: MutateOptions<R, E, B>) => UseMutationResult<R, E, B, unknown>

type FuncIsGet<M, F1 extends Function, F2 extends Function> = M extends 0
  ? F1
  : F2;
type FuncReturn<R> = () => R;

type Func<R, Q, P, B, M> = Q extends Map
  ? P extends Map
  ? B extends Map
  ? FuncIsGet<M, (query: Q, param: P, body: B) => R, FuncReturn<R>> // E
  : FuncIsGet<M, (query: Q, param: P) => R, FuncReturn<R>> // B
  : B extends Map
  ? FuncIsGet<M, (query: Q, body: B) => R, FuncReturn<R>> // C
  : FuncIsGet<M, (query: Q) => R, FuncReturn<R>> // A
  : P extends Map
  ? B extends Map
  ? FuncIsGet<M, (param: P, body: B) => R, FuncReturn<R>> // D
  : FuncIsGet<M, (param: P) => R, FuncReturn<R>> // F
  : B extends Map
  ? FuncIsGet<M, (body: B) => R, FuncReturn<R>> // G
  : FuncReturn<R>; // 0


  type FuncSrv<R, Q, P, B, M> = Q extends Map
  ? P extends Map
  ? B extends Map
  ? (query: Q, param: P, body: B) => Promise<R>//FuncIsGet<M, (query: Q, param: P, body: B) => R, FuncReturn<R>> // E
  : (query: Q, param: P) => Promise<R>//FuncIsGet<M, (query: Q, param: P) => R, FuncReturn<R>> // B
  : B extends Map
  ? (query: Q, body: B) => Promise<R>//FuncIsGet<M, (query: Q, body: B) => R, FuncReturn<R>> // C
  : (query: Q) => R//FuncIsGet<M, (query: Q) => R, FuncReturn<R>> // A
  : P extends Map
  ? B extends Map
  ? (param: P, body: B) => Promise<R>//FuncIsGet<M, (param: P, body: B) => R, FuncReturn<R>> // D
  : (param: P) => Promise<R>//FuncIsGet<M, (param: P) => R, FuncReturn<R>> // F
  : B extends Map
  ? (body: B) => Promise<R>//FuncIsGet<M, (body: B) => R, FuncReturn<R>> // G
  : () => Promise<R>; // 0

type Test0 = Func<number, undefined, undefined, undefined, 0>;
type TestA = Func<number, { email: string }, undefined, undefined, 0>;
type TestB = Func<number, { email: string }, { id: number }, undefined, 0>;
type TestC = Func<number, { email: string }, undefined, { name: string }, 0>;
type TestD = Func<number, undefined, { id: number }, { name: string }, 0>;
type TestE = Func<
  number,
  { email: string },
  { id: number },
  { name: string },
  0
>;
type TestF = Func<number, undefined, { id: number }, undefined, 0>;
type TestG = Func<number, undefined, undefined, { name: string }, 0>;

export class ApiFactory<A extends Config, MapFunc extends Map> {
  //   private _fn: MapFunc = {} as MapFunc;

  constructor(private _http: IHttpClientFactory, private _fn: MapFunc) {
    //     if (fn) {
    //       this._fn = fn;
    //     }
  }

  //   private _getHttpMethod(method: number) {
  // 	switch(method) {
  // 		case Method.GET: return 'GET';
  // 		case Method.POST: return 'POST';
  //   }

  private async _call<R, Q, P, B>(ctx: Context, req: Req<Q, P, B>): Promise<R> {
    const request: TRequest<Q, P, B> = {
      stringQuery: req.query,
      parameter: req.parameter,
      body: req.body,
    }

    const res = await this._http.handler<R, Q, P, B>(
      ctx.url,
      ctx.method.const as HttpMethod,
      request,
      ctx.config
    );
    // console.log('call res', res);
    return res;
  }

  private _action<R, Q, P, B>(ctx: Context, req: Req<Q, P, B>) {
    //     type R = Static<typeof ctx.response>;
    //     type Q = Static<typeof ctx.query>;
    //     type P = Static<typeof ctx.parameter>;
    //     type B = Static<typeof ctx.body>;
    //     type M = Static<typeof ctx.method>;

    if (ctx.method.const === 0) {
      return useQuery<R, unknown>({
        queryKey: [ctx.url, { ...req }],
        queryFn: () => this._call<R, Q, P, B>(ctx, req),
        refetchOnWindowFocus: false,
      });
    } else {
      return useMutation<R, unknown, Req<Q, P, B>, unknown>({
        mutationFn: (req) => {
          console.log('in mutation', req);
          return this._call<R, Q, P, B>(ctx, req)
        },
      });
    }

    // if(ctx.query !== undefined && ctx.parameter !== undefined && ctx.body !== undefined) {
    // 	return (query: Q, param: P, body: B): R => {
    // 		return {} as R;
    // 	}
    // } else if(ctx.query !== undefined && ctx.parameter !== undefined) {
    // 	return (query: Q, param: P): R => {
    // 		return {} as R;
    // 	}
    // } else if(ctx.query !== undefined && ctx.body !== undefined) {
    // 	return (query: Q, body: B): R => {
    // 		return {} as R;
    // 	}
    // } else if(ctx.query !== undefined) {
    // 	return (query: Q): R => {
    // 		return {} as R;
    // 	}
    // } else {
    // 	return useQuery<R, unknown>({
    // 		queryKey: [ctx.url, { ...request }],
    // 		queryFn: () => api.query<R, Q, P, B>(key, request),
    // 		...options
    // 	});
    // }

    return () => { };
  }

  public create<C extends Config>(
    c: C
  ): ApiFactory<
    C,
    MapFunc & {
      [K in keyof C]: Func<
        Static<C[K]['method']> extends 0
        ? UseQueryResult<Static<C[K]['response']>>
        : UseMutationResult<
          Static<C[K]['response']>,
          unknown,
          Request<
            Static<C[K]['query']>,
            Static<C[K]['parameter']>,
            Static<C[K]['body']>,
            Map
          >
        >,
        Static<C[K]['query']>,
        Static<C[K]['parameter']>,
        Static<C[K]['body']>,
        Static<C[K]['method']>
      >;
    }
  > {
    // console.log('config', c);
    //TODO
    Object.entries(c).forEach(([key, ctx]) => {
      type Response = Static<typeof ctx.response>;
      type Query = Static<typeof ctx.query>;
      type Parameter = Static<typeof ctx.parameter>;
      type Body = Static<typeof ctx.body>;
      type Method = Static<typeof ctx.method>;

      const action = <R, Q, P, B>(req: Req<Q, P, B>) => {
        // console.log('action', req);
        // console.log('ctx', ctx);  

        return this._action<R, Q, P, B>(ctx, req);
      };

      // console.log('context', ctx);
      // console.log("ctx.query.type", ctx.query.type !== 'undefined')
      // console.log("ctx.parameter.type", ctx.parameter.type !== 'undefined')
      // console.log("ctx.body.type", ctx.body.type !== 'undefined')

      this._fn = {
        ...this._fn,
        [key]:
          ctx.query.type !== 'undefined'
            ? ctx.parameter.type !== 'undefined'
              ? ctx.body.type !== 'undefined'
                ? (query: Query, param: Parameter, body: Body) =>
                  action<Response, Query, Parameter, Body>({
                    query,
                    parameter: param,
                    body,
                  })
                : (query: Query, param: Parameter) => {
                  // console.log('query Hi', query, param);
                  return action<Response, Query, Parameter, Body>({
                    query,
                    parameter: param,
                  })
                }
              : ctx.body.type !== 'undefined'
                ? (query: Query, body: Body) =>
                  action<Response, Query, Parameter, Body>({ query, body })
                : (query: Query) =>
                  action<Response, Query, Parameter, Body>({ query })
            : ctx.parameter.type !== 'undefined'
              ? ctx.body.type !== 'undefined'
                ? (param: Parameter, body: Body) =>
                  action<Response, Query, Parameter, Body>({
                    parameter: param,
                    body,
                  })
                : (param: Parameter) =>
                  action<Response, Query, Parameter, Body>({ parameter: param })
              : ctx.body.type !== 'undefined'
                ? (body: Body) => action<Response, Query, Parameter, Body>({ body })
                : () => action<Response, Query, Parameter, Body>({}),
      };
    });

    return new ApiFactory<
      C,
      MapFunc & { [K in keyof C]: Func<object, object, object, object, 0> }
    >(
      this._http,
      this._fn as MapFunc & {
        [K in keyof C]: Func<object, object, object, object, 0>;
      }
    );
  }


  public createService<C extends Config>(
    c: C
  ): ApiFactory<
    C,
    MapFunc & {
      [K in keyof C]: FuncSrv<
        Static<C[K]['response']>,
        Static<C[K]['query']>,
        Static<C[K]['parameter']>,
        Static<C[K]['body']>,
        Static<C[K]['method']>
      >;
    }
  > {
    Object.entries(c).forEach(([key, ctx]) => {
      type Response = Static<typeof ctx.response>;
      type Query = Static<typeof ctx.query>;
      type Parameter = Static<typeof ctx.parameter>;
      type Body = Static<typeof ctx.body>;
      type Method = Static<typeof ctx.method>;

      this._fn = {
        ...this._fn,
        [key]:
          ctx.query.type !== 'undefined'
            ? ctx.parameter.type !== 'undefined'
              ? ctx.body.type !== 'undefined'
                ? (query: Query, param: Parameter, body: Body) =>
                  this._call(ctx, { query, parameter: param, body })
                : (query: Query, param: Parameter) => {
                  // console.log('query Hi', query, param);
                  return this._call(ctx, { query, parameter: param });
                  // return action<Response, Query, Parameter, Body>({
                  //   query,
                  //   parameter: param,
                  // });
                }
              : ctx.body.type !== 'undefined'
                ? (query: Query, body: Body) => this._call(ctx, { query, body })
                : // action<Response, Query, Parameter, Body>({ query, body })
                (query: Query) => this._call(ctx, { query })
            : // action<Response, Query, Parameter, Body>({ query })
            ctx.parameter.type !== 'undefined'
              ? ctx.body.type !== 'undefined'
                ? (param: Parameter, body: Body) =>
                  this._call(ctx, { parameter: param, body })
                : // action<Response, Query, Parameter, Body>({
                //   parameter: param,
                //   body,
                // })
                (param: Parameter) => this._call(ctx, { parameter: param })
              : // action<Response, Query, Parameter, Body>({ parameter: param })
              ctx.body.type !== 'undefined'
                ? // ? (body: Body) => action<Response, Query, Parameter, Body>({ body })
                (body: Body) => this._call(ctx, { body })
                : // : () => action<Response, Query, Parameter, Body>({}),
                () => this._call(ctx, {}),
      };
    });

    return new ApiFactory<
      C,
      MapFunc & { [K in keyof C]: Func<object, object, object, object, 0> }
    >(
      this._http,
      this._fn as MapFunc & {
        [K in keyof C]: Func<object, object, object, object, 0>;
      }
    );
  }

  // public createOne<C extends Config>() {}

  public get api() {
    return this._fn;
  }
}

// const http = new HttpClientFactory('', () => Promise.resolve(''));
// const a = new ApiFactory(http, {});
// const api = a.create({
//   getProfileByEmail: {
//     url: '/profile',
//     method: Type.Literal(Method.GET),
//     response: Type.Object({ email: Type.String() }),
//     //     query: Type.Object({ email: Type.String() }),
//     query: Type.Undefined(),
//     parameter: Type.Undefined(),
//     body: Type.Undefined(),
//   },
//   getProfile: {
//     url: '/profile/:id',
//     method: Type.Literal(Method.GET),
//     response: Type.Object({ email: Type.String(), id: Type.Number() }),
//     query: Type.Object({ email: Type.String() }),
//     parameter: Type.Object({ id: Type.Number() }),
//     body: Type.Undefined(),
//   },
//   updateData: {
//     url: '/profile',
//     method: Type.Literal(Method.PATCH),
//     response: Type.Object({
//       email: Type.String(),
//       id: Type.Number(),
//       name: Type.String(),
//     }),
//     query: Type.Object({ email: Type.String() }),
//     //     parameter: Type.Object({ id: Type.Number() }),
//     parameter: Type.Undefined(),
//     body: Type.Object({ name: Type.String() }),
//   },
// }).api;

// const {data, refetch, error } = api.getProfile({ email: 'test' }, { id: 1 });
// const x = api.getProfileByEmail();
// const y = api.updateData();

// y.mutate({query: { email: 'test' }, body: { name: 'test' }}, {
//   onSuccess: (data) => {
//     console.log(data);
//   },
// });

// const updateData = api.updateData();
// const s2 = api.getProfileByEmail();

// const { data, isError, refetch } = s;

// updateData.mutate(
//   {
//     query: { email: '' },
//     body: { name: '' },
//   },
//   {
//     onSuccess: (data) => {
//       console.log(data);
//     },
//   }
// );

// // s1.mutate({ email: 'test' }, { id: 1 }, { name: 'test' });
