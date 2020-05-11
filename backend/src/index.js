import { GraphQLServer } from 'graphql-yoga';

// Type definations
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

// Resolvers
const resolvers = {
	Query: {
		hello: (parent, args, ctx, info) => `Hello, ${args.name}`,
	},
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
});

server.start((result) =>
	console.log(`Server started on port: ${JSON.stringify(result.port)}`)
);
