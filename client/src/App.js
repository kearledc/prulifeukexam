import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppRouter from "./AppRouter";

const client = new ApolloClient({
  uri: "http://localhost:3005/dota",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
