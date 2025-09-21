const request = require('supertest');
require('dotenv').config();

const obterToken = async (usuario, senha)=>{
    const responselogin = await request(process.env.BASE_URL)
                            .post('/login')
                            .set('content-type','application/json')
                            .send({
                                    'username': usuario,
                                    'senha': senha
            
                                }) 
    
                 
                return responselogin.body.token;
    
}


module.exports ={
    obterToken
}