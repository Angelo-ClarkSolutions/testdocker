import { expect } from "chai";
import { ExampleDataSource } from "../Data/DataSource/example.datasource";
import { datasource } from "../Data/DataSource/setupDataSource"
import { ExampleInputModel } from "../domain/Model/example.model";
import { Request } from "./config";

describe("Example Test", ()=>{
    var exampleDataSource: ExampleDataSource;
    const request = new Request();

    beforeEach(async()=>{
        await datasource.initialize();
        exampleDataSource = new ExampleDataSource();
    })

    afterEach(async()=>{
        await datasource.destroy()
    })

    it("should get an example", async ()=>{
        const getExampleInput: ExampleInputModel ={
            name:"Humberto"
        }
        const query = {
            query:`
                query getExample($getExampleInput: ExampleInputType!) {
                    getExample(exampleInput: $getExampleInput){
                        age,
                        name
                    }
                }
            `,
            variables: {getExampleInput}
        }

        const result = await request.executeQuery(query);
        expect(result.body.data.getExample.age).to.be.equal(88)
        expect(result.body.data.getExample.name).to.be.equal(getExampleInput.name)
    })
})