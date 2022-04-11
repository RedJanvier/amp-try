import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TrialServiceBase } from "./base/trial.service.base";

@Injectable()
export class TrialService extends TrialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
