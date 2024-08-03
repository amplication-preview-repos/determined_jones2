import { Module } from "@nestjs/common";
import { AdminActionModuleBase } from "./base/adminAction.module.base";
import { AdminActionService } from "./adminAction.service";
import { AdminActionController } from "./adminAction.controller";
import { AdminActionResolver } from "./adminAction.resolver";

@Module({
  imports: [AdminActionModuleBase],
  controllers: [AdminActionController],
  providers: [AdminActionService, AdminActionResolver],
  exports: [AdminActionService],
})
export class AdminActionModule {}
