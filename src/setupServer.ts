import { ApolloServer } from "apollo-server";
import { buildSchemaSync } from "type-graphql";
import "reflect-metadata";
import resolvers from "./API/Resolver";
import { decode } from "jsonwebtoken";

export class SetupServer {
  public exec(): ApolloServer {
    const schema = buildSchemaSync({ resolvers });
    const server = new ApolloServer({
      schema,
      context: ({ req }) => {
        const token = req.headers?.authorization?.split(" ").pop();
        if (token == undefined) {
          return;
        }
        return decode(token);
      },
    });

    return server;
  }
}
