# 🎉 Party Time

**Party Time** é um sistema web fullstack para criação e gerenciamento de eventos. A proposta é oferecer uma forma prática para o usuário montar um evento e futuramente gerar orçamentos personalizados.  
Atualmente, o sistema conta com um **CRUD básico** de eventos: criação, edição, visualização e exclusão.

---

## 🚀 Tecnologias Utilizadas

### 💻 Front-end
- [React](https://reactjs.org/)
- JavaScript
- CSS3

### 🔧 Back-end
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- Mongoose (ODM)

---

## 🧩 Funcionalidades

- [x] Criar eventos
- [x] Editar eventos existentes
- [x] Deletar eventos
- [x] Visualizar lista de eventos

---

## ⚙️ Como rodar o projeto

Clone este repositório e siga os passos abaixo para rodar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/seuusuario/party-time.git

# Acesse o diretório do projeto
cd party-time

# Instale as dependências do backend
cd backend
npm install
npm run dev

# Em outro terminal, instale o frontend
cd frontend
npm install
npm start
```
---

📁 Estrutura do Projeto (resumo)
party-time/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
