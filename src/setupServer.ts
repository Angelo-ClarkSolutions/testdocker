import { ApolloServer } from "apollo-server";
import { NonEmptyArray, buildSchemaSync } from "type-graphql";
import "reflect-metadata";
import { decode } from "jsonwebtoken";
import { extname, resolve } from "path";
import { readdirSync } from "fs";

export class SetupServer {
  public exec(): ApolloServer {
    const resolversPath = resolve(__dirname, "./API/Resolver");
    const resolvers = loadResolvers(resolversPath);

    if (resolvers.length === 0) {
      throw new Error("No resolvers found!");
    }

    const schema = buildSchemaSync({
      resolvers: resolvers as NonEmptyArray<Function>,
    });

    const server = new ApolloServer({
      schema,
      context: ({ req }) => {
        const token = req.headers?.authorization?.split(" ").pop();
        if (token == undefined) {
          return;
        }
        return decode(token);
      },
      cors: {
        origin: true,
      },
    });

    return server;
  }
}

export function loadResolvers(directory: string): Function[] {
  const files = readdirSync(directory);
  const resolvers = files.filter((file) => extname(file) === ".ts" || extname(file) === ".js").map((file) => require(resolve(directory, file)).default);

  return resolvers;
}
