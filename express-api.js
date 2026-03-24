const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("API is running");
});

let users = [];
let currentId = 0;

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Nome e email são obrigatórios",
    });
  }

  const newUser = {
    id: currentId++,
    name,
    email,
  };

  users.push(newUser);

  return res.status(201).json({
    message: "Usuário criado com sucesso",
    data: newUser,
  });
});

app.get("/users", (req, res) => {
  return res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      message: "ID inválido",
    });
  }

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }

  return res.status(200).json(user);
});

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      message: "ID inválido",
    });
  }

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }

  const { name, email } = req.body;

  if (!name && !email) {
    return res.status(400).json({
      message: "Informe pelo menos um campo para atualizar",
    });
  }

  users[index] = {
    ...users[index],
    ...req.body,
  };

  return res.status(200).json({
    message: "Usuário atualizado com sucesso",
    data: users[index],
  });
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      message: "ID inválido",
    });
  }

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Usuário não encontrado",
    });
  }

  const deletedUser = users[index];
  users.splice(index, 1);

  return res.status(200).json({
    message: "Usuário deletado com sucesso",
    data: deletedUser,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
