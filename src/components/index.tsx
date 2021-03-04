// react libraries
import * as React from "react";
import * as ReactDOM from "react-dom";

// third-party libraries
import {
  ApolloClient, 
  HttpLink, 
  InMemoryCache, 
  ApolloProvider
} from '@apollo/client';

// component(s)
import App from "./App";

// Apollo Client 
const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://pangaea-interviews.now.sh/api/graphql",
  }),
  cache: new InMemoryCache(),
});

// add app to DOM
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("main-app")
);
