<h1 align="center">
	<img src='https://www.svgrepo.com/show/142693/notes.svg' alt='Icone de anotações' width='30px' height='30px'/> CRUD Node

## Tecnologias utilizadas:

> Foi desenvolvida com as tecnologias Node.js com TypeScript, Express, TypeORM e o banco de dados PostgreSQL.

## Links:

``Documentação (swagger):``
```
https://backend-node-api-j7pt.onrender.com/doc/
```

``Deploy:``

Sua url base é 

```
https://backend-node-api-j7pt.onrender.com/
```

## Endpoints:

A API tem 6 endpoints, sendo em volta do usuário - podendo cadastrar seu perfil, realizar login, atualizar seus dados e deletar seu perfil.

<h2>
	Endpoints necessitam de autenticação:
</h2> 

E necessário passar um token para realizar uma requisição bem sucedida nos seguintes endpoints:

<h2 align = "center">
	Criação de Usuário
</h2>

``POST -> /user/ - FORMATO DA REQUISIÇÃO - usuário comum``

```json
{
  "name": "newuser",
  "email": "newuser@gmail.com",
  "password": "newpassword"
}
```

``FORMATO DA RESPOSTA - STATUS 201 - CREATED``

```json
{
  "id": "123456",
  "name": "newuser",
  "email": "newuser@gmail.com",
  "createdAt": "2024-07-24T17:37:18.449Z",
  "updatedAt": "2024-07-24T17:37:18.449Z"
}
```

<br/>

``GET -> /user/ - FORMATO DA RESPOSTA - listar todos usuárioS``

```json
[
  {
    "id": "123456",
    "name": "user1",
    "email": "newuser@gmail.com",
    "createdAt": "2024-07-24T17:37:18.449Z",
    "updatedAt": "2024-07-24T17:37:18.449Z"
  }
]
```

<br/>

``GET -> /user/owner - FORMATO DA RESPOSTA - listar usuário logado``

```json
  {
    "id": "123456",
    "name": "user1",
    "email": "newuser@gmail.com",
    "createdAt": "2024-07-24T17:37:18.449Z",
    "updatedAt": "2024-07-24T17:37:18.449Z"
  }
```
<br/>

``PATCH -> /user/{id} - FORMATO DA REQUISIÇÃO - atualizar usuário``

```json
{
  "name": "newuser2",
  "email": "newuser2@gmail.com",
  "password": "newpassword"
}
```

``FORMATO DA RESPOSTA - STATUS 200 - OK``

```json
{
  "id": "123456",
  "name": "newuser2",
  "email": "newuser2@gmail.com",
  "createdAt": "2024-07-24T17:37:18.449Z",
  "updatedAt": "2024-07-24T17:37:18.449Z"
}
```

<br/>

``DELETE -> /user/{id} - FORMATO DA REQUISIÇÃO - deletar usuário``

``FORMATO DA RESPOSTA - STATUS 204 - NO BODY``

<h2 align = "center">
	Login de Usuário
</h2>

``POST -> api/login/ - FORMATO DA REQUISIÇÃO - login``

```json
{
  "email": "user123@gmail.com",
  "password": "password123"
}
```

``FORMATO DA RESPOSTA - STATUS 200 - OK``

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

<br/>
