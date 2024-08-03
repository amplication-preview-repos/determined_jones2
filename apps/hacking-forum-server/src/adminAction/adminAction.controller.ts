import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminActionService } from "./adminAction.service";
import { AdminActionControllerBase } from "./base/adminAction.controller.base";

@swagger.ApiTags("adminActions")
@common.Controller("adminActions")
export class AdminActionController extends AdminActionControllerBase {
  constructor(protected readonly service: AdminActionService) {
    super(service);
  }
}
