import request from "supertest";
import { SetupServer } from "../setupServer";
import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";

export class Request {
  public async executeMutation(mutation: object) {
    dotenv.config();
    const server: ApolloServer = new SetupServer().exec();
    const port = process.env.TEST_SERVER_PORT;
    const response = await server.listen({ port }).then(async ({ url }) => {
      return request(url).post("/graphql").send(mutation);
    });
    await server.stop();
    return response;
  }

  public async executeQuery(query: object) {
    dotenv.config();
    const server: ApolloServer = new SetupServer().exec();
    const port = process.env.TEST_SERVER_PORT;
    const response = await server.listen({ port }).then(async ({ url }) => {
      return request(url).post("/graphql").send(query);
    });
    await server.stop();
    return response;
  }
}
