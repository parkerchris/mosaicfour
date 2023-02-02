import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { getSession } from 'next-auth/react';
import { GraphQLContext } from '../../util/types'
import { CreateUserTypeResponse } from '../../util/types'
import { PrismaClient } from '@prisma/client'

//review @2hr mark to setup typedefs and resolvers in their own files and use lodash merge to combine into a unified index file.
// ^^^^^^^^^^^ LOOK UP ^^^^^^^^^^^^^
//also add this npm i @graphql-tools/schema 
//^^^^ 2:22:00

const properties = [
    {
        address: "1010 Lakeview Rd",
        city: "San Diego",
        state: "CA",
        zip: "98216"
    },
    {
        address: "1012 Lakeview Rd",
        city: "Fresno",
        state: "CA",
        zip: "98216"
    },
    {
        address: "1014 Lakeview Rd",
        city: "Los Angeles",
        state: "CA",
        zip: "98216"
    },
]


const resolvers = {
  Query: {
    hello: () => 'world',
    properties: () => {
        return properties
    }
  },
  Mutation: {
    createUserType: (
        _: any, 
        args: { userType: string }, 
        context: GraphQLContext
    ) => {
        const { userType } = args
        const { session, prisma } = context

        if (!session?.user) {
            return {
                error: "Not authorized"
            }
        }

        const { id } = session.user

        try {

        } catch(error: any) {
            console.log("create user type error", error)
            return {
                //something wonky here
                //@3:37
                error: error?.message
            }
        }
    },
  }
};

const typeDefs = gql`
  type User {
    id: String
    userType: String
  }

  type Property {
    address: String
    city: String
    state: String
    zip: String
  }

  type CreateUserTypeResponse {
    success: Boolean
    error: String
  }
  
  type Query {
    hello: String
    properties(address: String): [Property]
  }

  type Mutation {
    createUserType(userType: String): CreateUserTypeResponse
  }

`;

//Context parameters
const prisma = new PrismaClient();


const server = new ApolloServer({
  resolvers,
  typeDefs,
  csrfPrevention: true, //added myself. May need to remove
  cache: "bounded", //added myself. May need to remove
  //plugins: [
   // ApolloServerPluginDrainHttpServer({ httpServer }),
  //  ApolloServerPluginLandingPageLocalDefault({ embed: true })
 // ]
});

export default startServerAndCreateNextHandler(server, {
    context: async (req, res): Promise<GraphQLContext> => {
        const session = await getSession({ req })
        console.log('CONTEXT SESSION', session)
        return { session, prisma }
    },
  });