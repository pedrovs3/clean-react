import axios from "axios";

import {
  type HttpPostClient,
  type HttpPostParams,
  type HttpResponse,
} from "@/data/protocols/http";

export class AxiosHttpClient implements HttpPostClient<any, any> {
  private readonly axios: typeof axios;
  constructor() {
    this.axios = axios;
  }

  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await this.axios.post(params.url, params.body);

    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    };
  }
}
