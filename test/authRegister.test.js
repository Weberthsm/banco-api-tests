const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config();
const postUsers = require('../fixtures/cadastrarUsuarios/postUsers.json');
//const { obterToken } = require('../helpers/autenticacao');
const Fakerator = require("fakerator");
const fakerator = Fakerator();
// const { seedPerfilUsers } = require('../helpers/seedUsers');


describe(' users', () => {

   /*  let token

    beforeEach(async () => {
        //Capturar o token antes de cada it  
        token = await obterToken('admin@local', 'admin123');
    }) */

    describe('POST /v1/auth/register', () => {
        it('US01.01(1.1) deve cadastrar o usuário e retornar status 201, tokens e data de expirção', async () => {

            const bodyPostUsers = structuredClone(postUsers);
            bodyPostUsers.username = fakerator.names.firstName();
            bodyPostUsers.email = bodyPostUsers.username + fakerator.internet.email();


            const response = await request(process.env.BASE_URL)
                .post('/api/v1/auth/register')
                .set('content-type', 'application/json')
                .send(bodyPostUsers)


            console.log('Corpo da requisição:', bodyPostUsers);
            console.log('Corpo de resposta:', response.body);

            expect(response.status).to.equal(200);
            expect(response.body).to.include.all.keys('access_token', 'refresh_token', 'expires_at');
            expect(response.body.access_token).to.be.a('string').that.is.not.empty;
            expect(response.body.refresh_token).to.be.a('string').that.is.not.empty;
        })


        it('US01.01(1.2) Deve retornar 400 ao tentar cadastrar usuário com email já existente', async () => {

            const bodyPostUsers = structuredClone(postUsers);
            bodyPostUsers.username = fakerator.names.firstName();
            bodyPostUsers.email = "suporte02@jrsistemas.net";

            const response = await request(process.env.BASE_URL)
                .post('/api/v1/auth/register')
                .set('content-type', 'application/json')
               // .set('Authorization', `Bearer ${token}`)
                .send(bodyPostUsers)
                 console.log(response.body);

            expect(response.status).to.equal(400);

        })


        it.skip('US01.01(1.3) Deve retornar 400 ao tentar cadastrar usuário com username já existente', async () => {

            const bodyPostUsers = structuredClone(postUsers);
            bodyPostUsers.username = "nome.pessoa";
            bodyPostUsers.email = fakerator.internet.email();

            const response = await request(process.env.BASE_URL)
                .post('/api/v1/auth/register')
                .set('content-type', 'application/json')
                //.set('Authorization', `Bearer ${token}`)
                .send(bodyPostUsers)
               console.log(response.body);

            expect(response.status).to.equal(400);

        })

        it('US01.01(1.4) deve retornar 400 ao tentar cadastrar usuário enviando body vazio', async () => {

            const response = await request(process.env.BASE_URL)
                .post('/api/v1/auth/register')
                .set('content-type', 'application/json')
            //  .set('Authorization', `Bearer ${token}`)
                .send({})
            //  console.log(response.body);

            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('error');
            //  expect(response.body.error).to.contains('username,email,password,role e active obrigatórios');

        })
       /*  it('US01.01(1.5) deve retornar 403 ao tentar cadastrar usuário com perfil não autorizado', async () => {
            await seedPerfilUsers();
            let tokenatendente = await obterToken('useratendente@mail.com', '123456');

            const bodyPostUsers = structuredClone(postUsers);
            bodyPostUsers.username = fakerator.names.firstName();
            bodyPostUsers.email = bodyPostUsers.username + fakerator.internet.email();


            const response = await request(process.env.BASE_URL)
                .post('/api/v1/auth/register')
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${tokenatendente}`)
                .send(bodyPostUsers)
             //console.log(response.body);

            expect(response.status).to.equal(403);
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.not.contains('Token inválido ou expirado');
            expect(response.body.error).to.contains('Acesso negado');

        })
 */



    })



/*     describe('GET /api/v1/auth/login', () => {
        it('Deve retornar 200 e listar todos os usuários já cadastrados', async () => {

            const response = await request(process.env.BASE_URL)
                .post('/api/v1/auth/login')
                //.set('Authorization', `Bearer ${token}`)
                .set('content-type', 'application/json')
              //console.log(response.body);

            expect(response.status).to.equal(200);

            expect(response.body).to.be.an('array');


            expect(response.body.length).to.be.at.least(1);

            dadosMinimosEsperados = [
                {
                    "username": "weberth.machado",
                    "email": "admin@local",
                    "role": "administrador",
                    "active": true
                }
            ];

            // Verifica se existe pelo menos um objeto na resposta que corresponde a um dos objetos em dadosMinimosEsperados
            expect(response.body.some(user =>
                dadosMinimosEsperados.some(expected =>
                    Object.keys(expected).every(key => expected[key] === user[key])
                )
            )).to.be.true;



        })
    }) */
})