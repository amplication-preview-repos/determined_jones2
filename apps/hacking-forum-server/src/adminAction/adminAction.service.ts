import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminActionServiceBase } from "./base/adminAction.service.base";

@Injectable()
export class AdminActionService extends AdminActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
