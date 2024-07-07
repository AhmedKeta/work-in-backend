import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { User } from "../users/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Weight {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: "The unique identifier of the weight entry",
  })
  id: number;

  @Column()
  @ApiProperty({ example: 75, description: "The weight value in kilograms" })
  value: number;

  @CreateDateColumn()
  @ApiProperty({
    example: "2024-06-28T00:00:00.000Z",
    description: "The date the weight was recorded",
  })
  date: Date;

  @DeleteDateColumn()
  @ApiProperty({
    description: "The date when the weight was deleted",
    example: "2020-01-01",
  })
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.weights)
  @ApiProperty({
    type: () => User,
    description: "The user who recorded the weight",
  })
  user: User;
}
