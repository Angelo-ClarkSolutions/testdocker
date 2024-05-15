import { Field, InputType, ObjectType } from "type-graphql";
import {
  ExampleInputModel,
  ExampleResultModel,
} from "../../domain/Model/example.model";

@ObjectType()
export class ExampleType implements ExampleResultModel {
  @Field()
  name!: string;

  @Field()
  age!: number;
}

@InputType()
export class ExampleInputType implements ExampleInputModel {
  @Field()
  name!: string;
}
