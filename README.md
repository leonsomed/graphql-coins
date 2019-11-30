# graphql-coins

## This project consists of two parts:
- Basic REST API server to manage orders
- GraphQL server that provides all data

## REST API
To start the REST API go ahead and clone the repo, install dependencies, and start it:

```shell
git clone https://github.com/leonsomed/graphql-coins
npm i
npm run start:api
```

This will start a server on port `5000` you can go ahead and send requests to the API for the "orders" resource.

GET /orders
POST /orders
PUT /orders
PATCH /orders
DELETE /orders

## GraphQL server
To start the GraphQL server

```shell
npm run start:graphql
```

After starting it go to `http://localhost:4000` to access the GraphQL playground

The GraphQL service will be available at `http://localhost:4000/graphql`
