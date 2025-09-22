# Banco API Tests

Projeto de **automação de testes** para a [Banco API](https://github.com/Weberthsm/banco-api), desenvolvido em **JavaScript** com foco em testes de integração de endpoints REST.  

O objetivo é validar o correto funcionamento da API, contribuindo para a confiabilidade nas operações de criação de contas, transferências, autenticação e demais recursos.  

---

## 🛠️ Stack utilizada

- [Node.js](https://nodejs.org/)  
- [Mocha](https://mochajs.org/) – framework de testes  
- [Chai](https://www.chaijs.com/) – biblioteca de asserções  
- [Supertest](https://github.com/ladjs/supertest) – requisições HTTP simuladas  
- [Mochawesome](https://github.com/adamgruber/mochawesome) – geração de relatórios em HTML  

---

## 📂 Estrutura de diretórios

```bash
banco-api-tests/
├── test/                # Casos de teste organizados por domínio
│   ├── login.test.js
│   ├── transferencias.test.js
│   └── ...
├── mochawesome-report/  # Relatórios HTML (gerados após execução)
├── .env                 # Variáveis de ambiente (criar manualmente)
├── package.json         # Dependências e scripts
└── README.md            # Este arquivo
```

---

## ⚙️ Arquivo `.env`

O arquivo `.env` deve ser criado na raiz do projeto, contendo ao menos a variável abaixo:

```env
BASE_URL=http://localhost:3000
```

> Substitua a URL conforme a instância em que a API esteja rodando.  

---

## ▶️ Executando os testes

1. Instale as dependências:  
   ```bash
   npm install
   ```

2. Execute os testes:  
   ```bash
   npm test
   ```

3. Gerar relatório com **Mochawesome**:  
   Após rodar os testes, o relatório será salvo em:  
   ```
   ./mochawesome-report/mochawesome.html
   ```

Para abrir o relatório no navegador:  
```bash
npx mochawesome-report-generator mochawesome-report/mochawesome.json
```

---

## 📚 Documentações úteis

- [Node.js](https://nodejs.org/en/docs/)  
- [Mocha](https://mochajs.org/#getting-started)  
- [Chai](https://www.chaijs.com/guide/)  
- [Supertest](https://github.com/ladjs/supertest#readme)  
- [Mochawesome](https://github.com/adamgruber/mochawesome#readme)  

---

## 🚀 Objetivo do projeto

Este repositório foi criado para servir como base de estudo e prática em **automação de testes de APIs REST**, permitindo:  
- Validação das regras de negócio implementadas na API.  
- Garantia da integridade das respostas HTTP.  
- Execução de cenários de sucesso e falha.  
- Geração de relatórios acessíveis em HTML para acompanhamento.  
