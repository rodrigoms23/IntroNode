const express = require("express");

const app = express();
app.use(express.json());
/*
Query params => meusite.com/users?nome=rodrigo&age=28 //filtros
Route params => /users/2 BUSCAR,DELETAR OU ATUALIZAR algo especifico /usuarios/:informação
Request body => {"name":Rodrigo,"age": 23,"senha":dasdsadadda}

GET -> BUSCAR INFO BACK END
POST -> CRIAR INFO BACK END
PUT/PATCH -> ALTERAR/ATUALIZAR INFORMAÇÕES  NO BACK END
DELETE -> DELETAR INFO NO BACK END

JSON => JAVA SCRIPT OBJECT NOTATION //PADRAO DE ENVIO DE DADOS
*/

const users = [
  {
    name: "Rodrigo",
    age: 23,
    name: "Carloso",
    age: 28,
  },
];
app.get("/usuarios", function (req, res) {
  res.json(users);
});
app.post("/usuarios", function (req, res) {
  console.log(req);
  res.json("Olá");
});
app.delete("/usuarios/:id", function (req, res) {
  console.log(req.params.id);

  const id = request.params.id;

  users.splice(id, 1);

  res.send("Usuário deletado com sucesso!");
});
app.listen(3000, () => {
  console.log("Meu servidor está rodando");
});
