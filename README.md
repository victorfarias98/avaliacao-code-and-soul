<div align="center">
<h1>MongoCrud - SoulBlog</h1>


<p>O Soulblog é um sistema de blog que se contempla com as principais funcionalidades de um blog bem estruturado, com a manipulações de publicações, de tags e categorias e breve muito mais!</p>

## Pré-Requisitos

Para iniciar a aplicação será necessária o uso e instalação de algumas ferramentas, tais como:

[NodeJS][node]
[MongoDB][mongo]
## Instalação

Para a instalação do nosso sistema de blog basta rodar esse comando na pasta raiz do projeto clonado, com isso você terá a estrutura e pacotes utilizadas já no seu repositório local

```
npm install 
```

## Utilização

Para iniciar o servidor basta navegar para a raiz do projeto através do terminal e utilizar o comando 
```
npm run start
```

## Rotas 

### Listas posts

```
http://localhost:2702/posts
```

Para listar todos os posts basta enviar uma requisição do tipo GET para a URL acima com o servidor rodando.


### Criar posts 

```
http://localhost:2702/posts
```

A rota de criação de posts aceita os seguintes parâmetros no JSON passado via POST

``` json 
{ "title": "Exemplo de post", "content": "Conteúdo do post" }

```
### Atualizar posts 

```
http://localhost:2702/posts
```

A rota de atualização de posts aceita os seguintes parâmetros no JSON passado via PUT

``` json
{ "title": "Exemplo de post", "content": "Conteúdo do post" }

```
### Deletar posts


```
http://localhost:2702/posts/:id
```

A rota de atualização de posts necessita do seguintes parâmetros de rota através de uma requisição DELETE

### Dúvidas ❓


1. O que levou você a escolher determinada tecnologia e suas vantagens?
    A interação mais comum e simples do MongoDB ( banco de dados solicitados no teste) é com o NodeJS, por isso foi minha escolha pra esse desafio, ainda tive a liberdade de utilizar o TypeScript para compor uma aplicação mais escalável e mais cooperável em equipe.
2. Quais padrões de projeto você aplicou para resolver problemas mais comuns?
    Utilizei o padrão SOLID para os problemas com modelos, casos de uso ( UseCases), controllers e por ser um dos princiáis padrões do mercado. Ainda utilizei o padrão de Singleton para manter uma única instância de Post para ajudar durante o desenvolvimento ( atualização e reload do ts-node-dev )



Para mais dúvidas estou disponível nesses canais abaixo:

- [Linkedin][linkedin]
- [Github][github]
- [Email][email]

[npm]: https://www.npmjs.com/
[yarn]: https://classic.yarnpkg.com
[node]: https://nodejs.org
[mongo]: https://docs.mongodb.com/manual/installation/
[linkedin]: https://www.linkedin.com/in/victorfarias98/
[github]: https://github.com/victorfarias98
[email]: mailto:vgfr456@gmail.com
