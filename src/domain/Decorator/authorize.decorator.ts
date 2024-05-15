import { GraphQLError } from "graphql";
import { RolesEnum } from "../Model/user.model";

export function Authorize(input: AuthorizeDecorator) {
  return function (target: any, propertyKey: any, descriptor: any) {
    const originalFn = target[propertyKey];
    descriptor.value = function (context: any, _: any) {
      if (context.exp == null) {
        throw new GraphQLError("Authentication failed");
      }
      if (new Date() > new Date(context?.exp * 1000)) {
        throw new GraphQLError("Expired Token");
      }
      if (
        !input.roles?.includes(
          RolesEnum[context.role as keyof typeof RolesEnum],
        )
      ) {
        throw new GraphQLError("Unauthorized");
      }
      return originalFn.call(this, context, _);
    };
  };
}

interface AuthorizeDecorator {
  roles?: RolesEnum[];
}
