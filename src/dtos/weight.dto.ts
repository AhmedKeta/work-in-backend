import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDateString,
} from "class-validator";

export class CreateWeightDto {
  @ApiProperty({ example: 75, description: "The weight value in kilograms" })
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @ApiProperty({
    example: "2024-06-28T00:00:00.000Z",
    description: "The date the weight was recorded",
  })
  @IsOptional()
  @IsDateString()
  date?: Date;

  @ApiProperty({
    example: 1,
    description: "The ID of the user who recorded the weight",
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}

export class UpdateWeightDto {
  @ApiProperty({
    example: 75,
    description: "The weight value in kilograms",
    required: false,
  })
  @IsOptional()
  @IsNumber()
  value?: number;

  @ApiProperty({
    example: "2024-06-28T00:00:00.000Z",
    description: "The date the weight was recorded",
    required: false,
  })
  @IsOptional()
  @IsDateString()
  date?: Date;

  @ApiProperty({
    example: 1,
    description: "The ID of the user who recorded the weight",
    required: false,
  })
  @IsOptional()
  @IsNumber()
  userId?: number;
}
