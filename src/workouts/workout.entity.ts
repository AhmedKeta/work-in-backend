import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: "The unique identifier of the workout",
  })
  id: number;

  @Column()
  @ApiProperty({ example: "Running", description: "The type of workout" })
  type: string;

  @Column()
  @ApiProperty({
    example: 30,
    description: "The duration of the workout in minutes",
  })
  duration: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @ApiProperty({
    example: "2024-06-28T00:00:00.000Z",
    description: "The date the workout was recorded",
  })
  date: Date;
}
