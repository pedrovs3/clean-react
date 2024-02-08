export class NetworkError extends Error {
  constructor () {
    super('Não foi possivel se conectar aos servidores. Tente novamente em breve')
    this.name = 'NetworkError'
  }
}
