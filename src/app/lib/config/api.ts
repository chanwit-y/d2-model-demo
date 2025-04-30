import { Type as t } from '@sinclair/typebox';
import { ApiFactory } from "../api/Factory";
import { HttpClientFactory } from "../http/HttpClientFactory";
import { HttpMethod } from '../http/@types';
import { FinGwReq } from './@types/finGwReq';
import { FinGwRes } from './@types/finGwRes';

const http = new HttpClientFactory(
  ``,
  async () => "",
  "1.0.0",
  120000,
  [],
  []
);

const f = new ApiFactory(http, {});

const srv = f.createService({
	finGw: {
		url: "",
		method: t.Literal(HttpMethod.POST),
		response: FinGwRes,
		query: t.Undefined(),
		parameter: t.Undefined(),
		body: FinGwReq,
	}
});

export const api = srv.api;