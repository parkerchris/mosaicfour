import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';


const httpLink = new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
    credentials: "include"
})


export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


//This is as stated in the docs
/* const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  }); */