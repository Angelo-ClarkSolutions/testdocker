import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { ExampleInputType, ExampleType } from "../Type/example.type";
import { ExampleListInputType } from "../Type/exampleList.type";
import { GetExampleUseCase } from "../../domain/Usecase/getExample.usecase";
import { ListExamplesUseCase } from "../../domain/Usecase/listExamples.usecase";
import { Authorize } from "../../domain/Decorator/authorize.decorator";
import { RolesEnum } from "../../domain/Model/user.model";

@Resolver(ExampleType)
export class ExampleResolver {
  private getExampleUsecase = new GetExampleUseCase();
  private listExamplesUseCase = new ListExamplesUseCase();

  @Query(() => ExampleType)
  async getExample(@Arg("exampleInput") exampleInput: ExampleInputType) {
    return this.getExampleUsecase.exec(exampleInput);
  }

  @Query(() => [ExampleType])
  @Authorize({ roles: [RolesEnum.Dev] })
  async listExamples(
    @Ctx() context: any,
    @Arg("listExamplesInput") listExamplesInput: ExampleListInputType,
  ) {
    return this.listExamplesUseCase.exec(listExamplesInput);
  }
}
