import { Module } from "@nestjs/common";
import { TrialModuleBase } from "./base/trial.module.base";
import { TrialService } from "./trial.service";
import { TrialController } from "./trial.controller";
import { TrialResolver } from "./trial.resolver";

@Module({
  imports: [TrialModuleBase],
  controllers: [TrialController],
  providers: [TrialService, TrialResolver],
  exports: [TrialService],
})
export class TrialModule {}
