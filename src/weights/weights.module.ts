import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WeightsService } from "./weights.service";
import { WeightsController } from "./weights.controller";
import { Weight } from "./weight.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Weight])],
  providers: [WeightsService],
  controllers: [WeightsController],
})
export class WeightsModule {}
