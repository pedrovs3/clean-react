import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { type HttpPostParams } from '../../../data/protocols/http'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResults = {
  status: faker.internet.httpStatusCode(),
  data: {
    name: faker.internet.userName(),
    password: faker.internet.password(),
    passwordConfirmation: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  }
}
mockAxios.post.mockResolvedValue(mockedAxiosResults)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    name: faker.internet.userName(),
    password: faker.internet.password(),
    passwordConfirmation: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  }
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)

    expect(mockAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct status code and body', async () => {
    const sut = makeSut()
    const httpResult = await sut.post(mockPostRequest())

    expect(httpResult).toEqual({
      statusCode: mockedAxiosResults.status,
      body: mockedAxiosResults.data
    })
  })
})
