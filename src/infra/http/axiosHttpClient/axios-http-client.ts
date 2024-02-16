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
    this.requestInterceptors();
    this.responseInterceptors();
  }

  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await this.axios.post(params.url, params.body);

    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    };
  }

  async get(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await this.axios.get(params.url);

    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    };
  }

  async put(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await this.axios.put(params.url, params.body);

    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    };
  }

  async delete(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await this.axios.delete(params.url);

    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    };
  }

  async patch(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await this.axios.patch(params.url, params.body);

    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    };
  }

  requestInterceptors() {
    axios.interceptors.request.use((config) => {
      return config;
    });
  }

  responseInterceptors() {
    axios.interceptors.response.use((response) => {
      return response;
    });
  }
}

export const axiosHttpClient = new AxiosHttpClient();
