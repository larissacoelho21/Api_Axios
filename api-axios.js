//import
const http = require ('http');
const axios = require('axios');
const express = require ('express') //expresse lib

const app = express(); //criando rotas


//funções para as requisições

    //post com id especifico
    app.get('/', function(req, res) {
        //URL da api que queremos acessar
        const apiUrl ='https://jsonplaceholder.typicode.com/posts/1';

        //Fazendo uma requisição HTTP GET com API
        axios.get(apiUrl).then((apiResponse) => {
            //configurando cabeçalho da resposta
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })

            //Exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)

            //tratamento de erro
        }).catch((error) => {
            console.error('Erro ao acessar a API')
        })
    })

    //post 
    app.get('/posts', function(req, res) {
        //URL da api que queremos acessar
        const apiUrl ='https://jsonplaceholder.typicode.com/posts/';

        //Fazendo uma requisição HTTP GET com API
        axios.get(apiUrl).then((apiResponse) => {
            //configurando cabeçalho da resposta
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })

            //Exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)

            //tratamento de erro
        }).catch((error) => {
            console.error('Erro ao acessar a API')
        })
    })


    //comments
    app.get('/comments', function(req, res) {
        //URL da api que queremos acessar
        const apiUrl ='https://jsonplaceholder.typicode.com/comments';

        //Fazendo uma requisição HTTP GET com API
        axios.get(apiUrl).then((apiResponse) => {
            //configurando cabeçalho da resposta
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })

            //Exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)

            //tratamento de erro
        }).catch((error) => {
            console.error('Erro ao acessar a API')
        })
    })


    //albums
    app.get('/albums', function(req, res) {
        //URL da api que queremos acessar
        const apiUrl ='https://jsonplaceholder.typicode.com/albums';

        //Fazendo uma requisição HTTP GET com API
        axios.get(apiUrl).then((apiResponse) => {
            //configurando cabeçalho da resposta
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })

            //Exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)

            //tratamento de erro
        }).catch((error) => {
            console.error('Erro ao acessar a API')
        })
    })

    //photos
    app.get('/photos', function(req, res) {
        //URL da api que queremos acessar
        const apiUrl ='https://jsonplaceholder.typicode.com/photos';

        //Fazendo uma requisição HTTP GET com API
        axios.get(apiUrl).then((apiResponse) => {
            //configurando cabeçalho da resposta
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })

            //Exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)

            //tratamento de erro
        }).catch((error) => {
            console.error('Erro ao acessar a API')
        })
    })

    //users
    app.get('/users', function(req, res) {
        //URL da api que queremos acessar
        const apiUrl ='https://jsonplaceholder.typicode.com/users';

        //Fazendo uma requisição HTTP GET com API
        axios.get(apiUrl).then((apiResponse) => {
            //configurando cabeçalho da resposta
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })

            //Exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)

            //tratamento de erro
        }).catch((error) => {
            console.error('Erro ao acessar a API')
        })
    })

    //to dos
    app.get('/todos', function(req, res) {
        //URL da api que queremos acessar
        const apiUrl ='https://jsonplaceholder.typicode.com/todos';

        //Fazendo uma requisição HTTP GET com API
        axios.get(apiUrl).then((apiResponse) => {
            //configurando cabeçalho da resposta
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })

            //Exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)

            //tratamento de erro
        }).catch((error) => {
            console.error('Erro ao acessar a API')
        })
    })











// Definindo a porta
const PORT = 3000;

//Iniciando o servidor e ouvindo a porta danificada
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})