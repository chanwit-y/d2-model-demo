import { HttpDecoratorReq } from './@types/HttpClientType';

function query({
  http,
  apiUrl,
  httpMethod,
  config,
  isNotUnwrap,
}: HttpDecoratorReq) {
  return (_: any, _1: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = function () {
      try {
        const { queryKey, options } = method.apply(this, arguments);
        const req = arguments.length > 0 ? arguments[0] : undefined;
        return {
          queryKey,
          options,
          queryFn: async () =>
            await http.handler(apiUrl, httpMethod, req, config, isNotUnwrap),
        };
      } catch (err) {
        throw err;
      }
    };
  };
}

function mutate({
  http,
  apiUrl,
  httpMethod,
  config,
  isNotUnwrap,
}: HttpDecoratorReq) {
  return (_: any, _1: string, descriptor: PropertyDescriptor) => {
    descriptor.value = async function (...args: any[]) {
      try {
        const req = args.length > 0 ? args[0] : undefined;
        return await http.handler(apiUrl, httpMethod, req, config, isNotUnwrap);
      } catch (err) {
        throw err;
      }
    };
  };
}

export { query, mutate };
// function api_(_: any, target: string, descriptor: PropertyDescriptor) {
//   console.log(target);

//   const method = descriptor.value;
//   //   console.log(originalMethod);
//   descriptor.value = function () {
//     //     let requiredParameters: number[] = Reflect.getOwnMetadata(
//     //       requiredMetadataKey,
//     //       target,
//     //       propertyName
//     //     );
//     //     if (requiredParameters) {
//     //       for (let parameterIndex of requiredParameters) {
//     //         if (
//     //           parameterIndex >= arguments.length ||
//     //           arguments[parameterIndex] === undefined
//     //         ) {
//     //           throw new Error("Missing required argument.");
//     //         }
//     //       }
//     //     }
//     console.log("apply");
//     const res = method.apply(this, arguments);
//     console.log(res);
//     return method.apply(this, arguments);
//   };
// }

// Todo: add type of param {body, param, query}
// function api2(api: IHttp, name: string, httpMethod: string) {
