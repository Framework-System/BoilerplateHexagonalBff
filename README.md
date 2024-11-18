# Hexagonal BFF Example

## Descrição

Este é um projeto boilerplate de um Backend for Frontend (BFF) em Node.js, demonstrando a aplicação da Arquitetura Hexagonal. O objetivo deste projeto é fornecer uma base sólida para a construção de APIs escaláveis e de fácil manutenção, utilizando boas práticas de design de software.

## Intenção

A intenção deste projeto é servir como um ponto de partida para desenvolvedores que desejam implementar a Arquitetura Hexagonal em seus projetos. Ele fornece uma estrutura organizada e modular, facilitando a adição de novas funcionalidades e a manutenção do código.

## O que ele se propõe a fazer

Este exemplo de BFF se propõe a:

- Demonstrar a estrutura de um projeto utilizando a Arquitetura Hexagonal.
- Fornecer uma API para buscar informações de filmes utilizando a API do The Movie Database (TMDb).
- Utilizar boas práticas de desenvolvimento, como injeção de dependências e separação de responsabilidades.

## Arquitetura

A arquitetura do projeto é organizada da seguinte forma:
src/
    application/
        services/
            movie/
                MovieService.ts
    domain/
        models/
            movie/
                Movie.ts
    infrastructure/
        adapters/
            tmdb/
                TMDbAdapter.ts
                tmdbConfig.ts
        controllers/
            MovieController.ts
        routes/
            MovieRoutes.ts
        server.ts
    tests/
        application/
            services/
                MovieService.test.ts


- **application**: Contém os serviços da aplicação, responsáveis pela lógica de negócio.
- **domain**: Contém os modelos de domínio.
- **infrastructure**: Contém os adaptadores, controladores, rotas e configuração do servidor.
- **tests**: Contém os testes unitários.

## Bibliotecas Utilizadas

- [axios](https://www.npmjs.com/package/axios): Para fazer requisições HTTP.
- [dotenv](https://www.npmjs.com/package/dotenv): Para carregar variáveis de ambiente.
- [express](https://www.npmjs.com/package/express): Framework web para Node.js.
- [node-cache](https://www.npmjs.com/package/node-cache): Para cache em memória.
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc): Para gerar documentação da API.
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express): Para servir a documentação da API.

## Como Executar

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/hexagonal-example-bff.git
   cd hexagonal-example-bff

2. Instale as dependências:

npm install

3. Configure as variáveis de ambiente no arquivo .env.
4. Inicie o servidor:

npm start

5. Acesse a documentação da API em http://localhost:9876/swagger.

Contribuição
Convidamos todos a colaborar com a evolução deste projeto. Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias. Juntos podemos construir uma base sólida para projetos futuros!

Licença
Este projeto está licenciado sob a licença ISC. Veja o arquivo LICENSE para mais detalhes.

Feito por Framework Digital. ```