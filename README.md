<div align="center">
<h1>Avaliação Code and Soul - SoulBlog</h1>


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

Para dúvidas estou disponível nesses canais abaixo:

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
