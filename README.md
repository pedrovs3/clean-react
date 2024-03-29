# ReactJS-TDD

<!-- TOC -->

* [ReactJS-TDD](#reactjs-tdd)
    * [Sobre](#sobre)
    * [Folder Structure](#folder-structure)
    * [Domain](#domain)
    * [Data](#data)
    * [Infra](#infra)
    * [Presentation](#presentation)
    * [Validation](#validation)
    * [Main](#main)

<!-- TOC -->

## Sobre

Projeto desenvolvido com o objetivo de estudar e aplicar TDD (Test Driven Development) em uma aplicação ReactJS.

## Folder Structure

```bash
src
├── domain
│   ├── models
│   ├── errors
│   └── usecases
├── data
│   ├── protocols
│   ├── models
│   └── usecases
├── infra
│   ├── http
│   └── cache
├── presentation
│   ├── components
│   ├── hooks
│   ├── protocols
│   ├── styles
│   └── pages
├── validation
│   ├── protocols
│   ├── errors
│   └── usecases
└── main
    ├── factories
    ├── adapters
    ├── builders
    ├── composites
    ├── decorators
    ├── proxies
    ├── routes
    └── config
```

## Domain

Topics: `Regras de negócio`, `Interfaces`, `Protocolos`, `Contratos`, `Entidades`, `Modelos`, `Tipos`.

Camada responsável por conter as regras de negócio da aplicação.
> Resumo: Camada de `regras de negócio da aplicação`.</br>
> Regra de negócios basicamente devem ser descritas como interfaces</br>
> Exemplo: Interface de autenticação de usuário, sem a implementação.

> Exemplo:
> ```typescript
> export interface Authentication {
> token: string;
> name: string;
> email: string;
> }
> ```

## Data

Topics: `Tratar respostas da API`, `Tratar requisições para a API`

Camada responsável por implementar as regras de negócio da aplicação.

> Resumo: Camada de `implementação das regras de negócio`.</br>
> Aqui é tratado as requisições e respostas da API, mas ainda sem a implementação de como será feita a requisição.</br>
> Definição de um protocolo de regras entre requisições.</br>
> Exemplos: `HttpPostClient`, `HttpGetClient`, `HttpPutClient`, `HttpDeleteClient`.

## Infra

Topics: `Implementação de requisições HTTP`

Camada responsável por implementar os clientes presentes no Data Layer.

> Resumo: Camada de `implementação do data layer`.</br>
> Aqui é onde é feita a implementação de como será feita a requisição utilizando axios, fetchApi ou qualquer outra
> ferramenta de requisição HTTP.</br>
> Exemplos: `AxiosHttpClient`, `FetchHttpClient`.

## Presentation

Topics: `Renderização de componentes`, `Controle de estados`

Camada responsável por conter os componentes e páginas da aplicação.

> Resumo: Camada de `componentes e páginas`.</br>
> Aqui é onde é feita a implementação dos componentes e páginas da aplicação.</br>
>
> Pode ter uma interface para implementação de validação de campos, assim o componente fica dependente apenas de uma
> abstração da validação e nao do validator em si.</br>
>
>
> Exemplos: `Login`, `SignUp`, `Home`, `Dashboard`.

## Validation

Topics: `Validação de campos`

Camada responsável por conter as validações de campos da aplicação.

> Resumo: Camada de `validações`.</br>
> Aqui é onde é feita a implementação das validações de campos da aplicação.</br>
> Exemplos: `RequiredFieldValidation`, `EmailFieldValidation`, `MinLengthValidation`, `CompareFieldsValidation`.

## Main

Topics: `Integração de todas as camadas`

Camada responsável por integrar todas as camadas da aplicação.

> Resumo: Camada de `integração`.</br>
> Aqui é onde é feita a integração de todas as camadas da aplicação.</br>
> Exemplos: `Login`, `SignUp`, `Home`, `Dashboard`.
>
> A ideia principal é conter pattern's</br>
> Exemplo: Factories (Factory Method, Abstract Factory, Simple Factory), Dependency Injection etc.
