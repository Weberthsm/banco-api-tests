const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json')



if (!process.env.BASE_URL) {
  throw new Error('BASE_URL não definido. Defina no .env ou exporte $env:BASE_URL no PowerShell.');
}

describe('Login', ()=>{
    describe('/POST /api/v1/auth/login', ()=>{
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async ()=>{
            
            const bodyLogin = {...postLogin}
            const response = await request(process.env.BASE_URL)
                .post('/api/v1/auth/login')
                .set('content-type','application/json')
                .send(bodyLogin) 

                console.log('Corpo da requisição:', bodyLogin);
                console.log('Corpo de resposta:', response.body);
            expect(response.status).to.equal(200);
            expect(response.body.access_token).to.be.a('string').not.empty; 
            expect(response.body.refresh_token).to.be.a('string').not.empty;             

        })
    })
})