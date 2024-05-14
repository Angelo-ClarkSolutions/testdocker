import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Example{
    @PrimaryGeneratedColumn()
    key!: number

    @Column({nullable: true})
    optional?: string
}