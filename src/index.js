import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Membuat daftar type definision
// mwmbuat query hello dengan mengembalikan string
const typeDefs = `#graphql 
    type Query {
        hello: String,
        users: UserResponse
    }

    type User {
        name: String,
        age: Int
    }

    type UserResponse {
        status: Int,
        message: String,
        data: [User]
    }
`;

// Membuat daftar resolvers
// jika query hello dijalankan,maka akan mengembalikan string "Hello world"
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    users: () => {
      return {
        status: 200,
        message: "success",
        data: [
          {
            name: "John",
            age: 30,
          },
          {
            name: "Jane",
            age: 25,
          },
        ],
      };
    },
  },
};

// konfigurasi/membuat server menggunakan apollo server, artinya semua query dan resolver(response dari query maka akan disimpan disini)
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Membuat port dan menjalankannya
const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

// Cara ngequery menggunakan grapql sesuaikan dengan data response dari resolver
// query {
//   users {
//     status
//     message
//     data {
//       name
//       age
//     }
//   }
// }

// query {
// hello
// }

console.log(`Server ready at ${url}`);
