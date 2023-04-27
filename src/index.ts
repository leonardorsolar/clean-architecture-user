import express, { Request, Response } from "express";
const app = express();
// parse para converter o corpo da request em objeto
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
};

// interface User  {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   age: number;
// };

// registrar no banco de dados na tabela chamada users
const users: User[] = [];

app.post("/signup", (req: Request, res: Response) => {
  //receber os dados do front
  const input = req.body;
  // validação: caso os campos venham vazio
  if (!req.body) throw new Error("Insira as informações");
  // validação: caso o campo email não foi inserido
  if (req.body.firstName.split(" ").length > 2) throw new Error("O nome tem que ter mais de 2 caracter");
  // validação: caso existe um usuário no banco?
  const isExists = users.find((user: User) => user.password === req.body.password);
  // console.log(isExists);
  if (isExists) throw new Error("Nome já cadastrado no banco de dados");
  //salvar no banco de dados
  if (!isExists) {
    users.push(input);
  }
  // console.log(users);
  // retornar para o front
  res.status(201).json(users[0]);
});

app.listen(3000);
