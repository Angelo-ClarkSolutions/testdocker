import { DataSource } from "typeorm";
import { resolve } from "path";

const entitiesPath = resolve(__dirname, "../Entity/*.entity.{ts,js}");

export const datasource = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "example",
  synchronize: true,
  logging: false,
  entities: [entitiesPath],
  subscribers: [],
  migrations: [],
});
