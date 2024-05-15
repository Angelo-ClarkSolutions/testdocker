import { ApolloServer } from "apollo-server";
import { SetupServer } from "./setupServer";
import { datasource } from "./Data/DataSource/setupDataSource";

datasource.initialize();

const PORT = process.env.PORT || 4000;
const server: ApolloServer = new SetupServer().exec();

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
