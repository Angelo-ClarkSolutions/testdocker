import { DataSource } from "typeorm";
import { Example } from "../Entity/example.entity";

export const datasource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "example",
    synchronize: true,
    logging: false,
    entities: [Example],
    subscribers: [],
    migrations: [],
})