import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Weight } from "../weights/weight.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "The unique identifier of the user", example: 1 })
  id: number;

  @Column()
  @ApiProperty({
    description: "The email of the user",
    example: "yQJiA@example.com",
  })
  email: string;

  @Column()
  @ApiProperty({ description: "The password of the user", example: "password" })
  password: string;

  @Column()
  @ApiProperty({
    description: "The birth date of the user",
    example: "1990-01-01",
  })
  birthDate: Date;

  @Column({ type: "enum", enum: ["male", "female"] })
  @ApiProperty({ description: "The gender of the user", example: "male" })
  gender: string;

  @Column({
    type: "enum",
    enum: ["Power lifting", "Muscle gain", "Stamina"],
    array: true,
  })
  @ApiProperty({
    description: "The goals of the user",
    isArray: true,
    example: ["Power lifting", "Muscle gain"],
  })
  goals: string[];

  @Column({ nullable: true })
  @ApiProperty({
    description: "The weight goal of the user",
    nullable: true,
    example: 70,
  })
  weightGoal: number;

  @Column({ nullable: true })
  @ApiProperty({
    description: "Google ID of the user if logged in via Google",
    nullable: true,
    example: "1234567890",
  })
  googleId: string;

  @CreateDateColumn()
  @ApiProperty({
    description: "The date when the user was created",
    example: "2020-01-01",
  })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({
    description: "The date when the user was last updated",
    example: "2020-01-01",
  })
  updatedAt: Date;

  @DeleteDateColumn()
  @ApiProperty({
    description: "The date when the user was deleted",
    example: "2020-01-01",
  })
  deleted_at: Date;

  @OneToMany(() => Weight, (weight) => weight.user)
  @ApiProperty({
    type: () => Weight,
    isArray: true,
    description: "The weights of the user over time",
    example: [{ id: 1, value: 70, date: "2020-01-01" }],
  })
  weights: Weight[];
}
