// react libraries
import * as React from "react";
import * as ReactDOM from "react-dom";

// third-party libraries
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// component(s)
import App from "./App";

// Apollo Client 
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors && graphQLErrors.length > 0) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, 
        Location: ${locations}, 
        Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
const apolloClient = new ApolloClient({
  link: from([
    errorLink,
    new HttpLink({
      uri: "https://pangaea-interviews.now.sh/api/graphql",
    }),
  ]),
  cache: new InMemoryCache(),
});

// add app to DOM
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("main-app")
);
