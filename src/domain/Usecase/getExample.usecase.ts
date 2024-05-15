import { GraphQLError } from "graphql";
import { ExampleInputModel, ExampleResultModel } from "../Model/example.model";
export class GetExampleUseCase {
  public exec(input: ExampleInputModel): ExampleResultModel {
    const mockData: ExampleResultModel[] = [
      { age: 30, name: "Roberto" },
      { age: 23, name: "Arnaldo" },
      { age: 84, name: "Tereza" },
      { age: 45, name: "Antonio" },
      { age: 7, name: "Julia" },
      { age: 88, name: "Humberto" },
    ];

    const result = mockData.find((example) => example.name == input.name);

    if (result == undefined) {
      throw new GraphQLError("Não foi encontrado uma pessoa com esse nome");
    }

    return result;
  }
}
