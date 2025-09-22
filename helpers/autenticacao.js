const request = require('supertest');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (usuario, senha)=>{
   
    const bodyLogin = {...postLogin}
    const responselogin = await request(process.env.BASE_URL)
                            .post('/login')
                            .set('content-type','application/json')
                            .send(bodyLogin) 
    
                 
                return responselogin.body.token;
    
}


module.exports ={
    obterToken
}