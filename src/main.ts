import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as compression from "compression";
import * as rateLimit from "express-rate-limit";
import helmet from "helmet";
import { json, urlencoded } from "express";
import { NoBodyMiddleware } from "./middleware/no-body.middleware";
import { LengthControlMiddleware } from "./middleware/length-control.middleware";
import { setupSwagger } from "./swagger.config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Enable cors
  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });

  // Set up Swagger documentation
  setupSwagger(app);

  // Apply compression middleware
  app.use(compression());

  // Apply rate limiting middleware
  app.use(
    rateLimit.default({
      windowMs: 60 * 1000, // 1 minute
      max: 50, // Limit each IP to 50 requests per minute
    }),
  );

  // Apply helmet middleware for security
  app.use(helmet());

  // Apply body parsing middleware
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Apply custom middleware
  app.use(new NoBodyMiddleware().use);
  app.use(new LengthControlMiddleware().use);

  await app.listen(3000);
}
bootstrap();
