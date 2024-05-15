import {
  ExampleListInputModel,
  ExampleResultModel,
} from "../Model/example.model";

export class ListExamplesUseCase {
  public exec(input: ExampleListInputModel): ExampleResultModel[] {
    const mockData: ExampleResultModel[] = [
      { age: 30, name: "Roberto" },
      { age: 23, name: "Arnaldo" },
      { age: 84, name: "Tereza" },
      { age: 45, name: "Antonio" },
      { age: 7, name: "Julia" },
      { age: 88, name: "Humberto" },
    ];

    return mockData.slice(0, input.amount);
  }
}
