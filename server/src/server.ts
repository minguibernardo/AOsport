import express from 'express' //importação Node modulo

/**Cria um aplicativo Express. A função express() é uma função de nível superior exportada pelo módulo express. */
const app = express()

//primeira rota ou endpoint da nossa app

/**metodo get
 * como funciona o primeiro parametro
 * qual endereço que usuario vai esta acessando
 *  ~
 * e segundo paramentro precisar ser uma funcao
 * que vai ser executado quando o usuario acessar a rota
 * dentro da funcao sao neccessario dois parametro
 * o resquest, response
 */
app.get('/ads', (request, response)=>{
    //dentro da resquest sao para buscar informacoes
    //e o response server para devolver uma resposta
    //exmplo
    return response.json([
        {id:1,name:'mingui'},
        {id:2,name:'mingui'},
        {id:3,name:'mingui'},
    ])
  
}) 

/**
 * Quando usamos o listem
 * é para ouvir novas requisições
 * e que ela não pare a menos que encerramos o processo
 */
app.listen(333)