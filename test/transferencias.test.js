const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');


describe('Transferências',()=>{
    describe('/post transferências', ()=>{
        
        let token

        beforeEach(async()=>{
            //Capturar o token antes de cada it
            token = await obterToken('julio.lima','123456');
        })

        it('Deve retornar 201 quando o valor da transferência for maior ou igual a R$10', async ()=>{
        
         const boryPostTransferencias = {...postTransferencias}
         const Response = await request(process.env.BASE_URL)
         .post('/transferencias')
         .set('content-type','application/json')
         .set('Authorization', `Bearer ${token}`) 
         .send(boryPostTransferencias)
             
            expect(Response.status).to.equal(201);
            console.log(Response.body);
        }) 
        
       
        
        

        it('Deve retornar 422 quando o valor da transferência for abaixo de R$10', async ()=>{

         const boryPostTransferencias = {...postTransferencias}
         boryPostTransferencias.valor = 7;

         const Response = await request(process.env.BASE_URL)
         .post('/transferencias')
         .set('content-type','application/json')
         .set('Authorization', `Bearer ${token}`) 
         .send(boryPostTransferencias)
             
            expect(Response.status).to.equal(422);
            console.log(Response.body);
            


        })
    })
})
