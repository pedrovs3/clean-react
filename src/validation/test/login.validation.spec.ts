import { LoginSchema } from "@/validation/usecases/login.validation.ts";

const makeSut = () => {
  const sut = LoginSchema

  return {
    sut
  }
}
describe('Login Validation', () => {
  test('Should return error if email is invalid', async () => {
    const { sut } = makeSut()
    const promise = sut.safeParse({ email: 'invalid_email', password: 'any_password' })
    console.log(promise)
})});
