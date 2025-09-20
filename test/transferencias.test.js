const request = require('supertest');
const {expect} = require('chai');
const baseurl = 'http://localhost:3000';


describe('Transferências',()=>{
    describe('/post transferências', ()=>{

    


        it('Deve retornar 201 quando o valor da transferência for maior ou igual a R$10', async ()=>{

          //Capturar o token
        
         const responselogin = await request(baseurl)
                        .post('/login')
                        .set('content-type','application/json')
                        .send({
                                'username': 'julio.lima',
                                'senha': '123456'
        
                            }) 

            const token = responselogin.body.token            


         const Response = await request(baseurl)
         .post('/transferencias')
         .set('context-type','application/json')
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
        
         const responselogin = await request(baseurl)
                        .post('/login')
                        .set('content-type','application/json')
                        .send({
                                'username': 'julio.lima',
                                'senha': '123456'
        
                            }) 

            const token = responselogin.body.token            


         const Response = await request(baseurl)
         .post('/transferencias')
         .set('context-type','application/json')
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
