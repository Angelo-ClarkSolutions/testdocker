import { Field, InputType } from "type-graphql";
import { ExampleListInputModel } from "../../domain/Model/example.model";

@InputType()
export class ExampleListInputType implements ExampleListInputModel {
  @Field()
  amount!: number;
}
