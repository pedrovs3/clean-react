import { type HttpResponse } from ".";

export type HttpPostParams<T> = {
  body?: T;
  headers?: object;
  url: string;
};

export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>;
}
