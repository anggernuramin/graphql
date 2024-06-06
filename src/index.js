import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Membuat daftar type definision
// mwmbuat query hello dengan mengembalikan string
const typeDefs = `#graphql 
    type Query {
        hello: String
    }
`;

// Membuat daftar resolvers
// jika query hello dijalankan,maka akan mengembalikan string "Hello world"
const resolvers = {
  Query: {
    hello: () => "Hello world!",
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

console.log(`Server ready at ${url}`);
