const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');


describe('Transferências',()=>{

    let token

        beforeEach(async()=>{
            //Capturar o token antes de cada it
            token = await obterToken('julio.lima','123456');
        })

    describe('/post transferências', ()=>{
       
        
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
    
       
    describe('/GET transferências/{id}', ()=>{
        
        it('Deve retornar sucesso e 200 e dados iguais ao registro de transferencia contidos no banco de dados quando o ID for válido',async()=>{
            const response = await request(process.env.BASE_URL)
            .get('/transferencias/19')
            .set('Authorization',`Bearer ${token}`) 
        
            console.log(response.status)
            console.log(response.body)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(19)
            expect(response.body.id).to.be.a('number')
            expect(response.body.conta_origem_id).to.equal(1)
            expect(response.body.conta_destino_id).to.equal(2)
            expect(response.body.valor).to.equal(11.00)
        
        })

    })

    describe('GET /transferencias',()=>{
        it('Deve retornar 10 elementos na paginação quando informar 10 registros',async ()=>{
            const response = await request(process.env.BASE_URL)
            .get('/transferencias?page=1&limit=10')
            .set('Authorization',`Bearer ${token}`)

            console.log(response.body)
            expect(response.body.transferencias).have.lengthOf(10)
        })
    })

})
