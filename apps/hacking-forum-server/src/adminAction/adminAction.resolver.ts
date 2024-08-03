import * as graphql from "@nestjs/graphql";
import { AdminActionResolverBase } from "./base/adminAction.resolver.base";
import { AdminAction } from "./base/AdminAction";
import { AdminActionService } from "./adminAction.service";

@graphql.Resolver(() => AdminAction)
export class AdminActionResolver extends AdminActionResolverBase {
  constructor(protected readonly service: AdminActionService) {
    super(service);
  }
}
