import { AxiosHttpClient } from './axios-http-client'
import { mockedAxios } from '../../test'
import type axios from 'axios'
import { mockPostRequest } from '@/data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockAxios = mockedAxios()

  return {
    sut,
    mockAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockAxios } = makeSut()
    await sut.post(request)

    expect(mockAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct status code and body', () => {
    const { sut, mockAxios } = makeSut()
    const promise = sut.post(mockPostRequest())

    expect(promise).toEqual(mockAxios.post.mock.results[0].value)
  })
})
