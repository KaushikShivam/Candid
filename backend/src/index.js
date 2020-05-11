import { GraphQLServer } from 'graphql-yoga';

// Type definations
const typeDefs = `
  type Query {
    user: User!
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
  }
  
`;

// Resolvers
const resolvers = {
	Query: {
		user: (parent, args, ctx, info) => ({
			id: 1,
			name: 'shivam',
			email: 'shivam@gmail.com',
		}),
	},
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
});

server.start((result) =>
	console.log(`Server started on port: ${JSON.stringify(result.port)}`)
);
