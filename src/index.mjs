import express, { request, response } from 'express'

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "anson", displayName: "Anson" },
  { id: 2, username: "jack", displayName: "Jack" },
  { id: 3, username: "miguel", displayName: "Miguel" },
];


app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello" });
});

app.get('/api/users', (request, response) => {
  response.send(mockUsers);
})

app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id)
  console.log(parsedId);
  if (isNaN(parsedId)) return response.status(400).send({ msg: "Bad Request. invalid ID." });

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser)return response
});



app.get("/api/products", (request, response) => {
  response.send([{id:123, name:"chicken breast", price: 12.99}])
})

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
  
});

//localhost:3000
//localhost:3000/users
//localhost:3000/products