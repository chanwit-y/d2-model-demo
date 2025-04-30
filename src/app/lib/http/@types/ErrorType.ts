import { AxiosError } from 'axios';

export type IgnoreService = {
  name: string;
  method: string;
}

export type ErrorType = {
  statusCode: number;
  response: AxiosError;
}