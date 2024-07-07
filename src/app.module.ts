import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutsModule } from "./workouts/workouts.module";
import { UsersModule } from './users/users.module';
import { WeightsModule } from './weights/weights.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "1",
			database: "work_in",
			entities: [__dirname + "/**/*.entity{.ts,.js}"],
			synchronize: true,
		}),
		WorkoutsModule,
		UsersModule,
		WeightsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
