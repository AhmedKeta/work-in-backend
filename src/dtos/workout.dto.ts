import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
} from "class-validator";

export class CreateWorkoutDto {
  @ApiProperty({ example: "Running", description: "The type of workout" })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({
    example: 30,
    description: "The duration of the workout in minutes",
  })
  @IsNotEmpty()
  @IsNumber()
  duration: number;

  @ApiProperty({
    example: "2024-06-28T00:00:00.000Z",
    description: "The date the workout was recorded",
  })
  @IsOptional()
  @IsDateString()
  date?: Date;
}

export class UpdateWorkoutDto {
  @ApiProperty({
    example: "Running",
    description: "The type of workout",
    required: false,
  })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty({
    example: 30,
    description: "The duration of the workout in minutes",
    required: false,
  })
  @IsOptional()
  @IsNumber()
  duration?: number;

  @ApiProperty({
    example: "2024-06-28T00:00:00.000Z",
    description: "The date the workout was recorded",
    required: false,
  })
  @IsOptional()
  @IsDateString()
  date?: Date;
}
