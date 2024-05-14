import { Repository } from "typeorm";
import { Example } from "../Entity/example.entity";
import { datasource } from "./setupDataSource";

export class ExampleDataSource{
    repository: Repository<Example>;

    constructor(){
        this.repository = datasource.getRepository(Example)
    }

    public async listExamples(): Promise<Example[]>{
        return await this.repository.find()
    }
}