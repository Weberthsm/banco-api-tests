const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/autenticacao')


describe('Transferências',()=>{
    describe('/post transferências', ()=>{

        it('Deve retornar 201 quando o valor da transferência for maior ou igual a R$10', async ()=>{

         //Capturar o token
         const token = await obterToken('julio.lima','123456');
         
         const Response = await request(process.env.BASE_URL)
         .post('/transferencias')
         .set('content-type','application/json')
         .set('Authorization', `Bearer ${token}`) 
         .send({
                "contaOrigem": 1,
                "contaDestino": 2,
                "valor": 11,
                 "token": ""
            })
             
            expect(Response.status).to.equal(201);
            console.log(Response.body);
        }) 
        
       
        
        

        it('Deve retornar 422 quando o valor da transferência for abaixo de R$10', async ()=>{
              
          //Capturar o token
         const token = await obterToken('julio.lima','123456');           

         const Response = await request(process.env.BASE_URL)
         .post('/transferencias')
         .set('content-type','application/json')
         .set('Authorization', `Bearer ${token}`) 
         .send({
                "contaOrigem": 1,
                "contaDestino": 2,
                "valor": 7,
                 "token": ""
            })
             
            expect(Response.status).to.equal(422);
            console.log(Response.body);
            


        })
    })
})
