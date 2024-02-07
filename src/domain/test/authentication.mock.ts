import { type AuthenticationParams } from '../usecases/authentication'
import { faker } from '@faker-js/faker'

export const AuthenticationMock = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
