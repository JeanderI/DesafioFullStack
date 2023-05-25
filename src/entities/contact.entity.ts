import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from ".";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "integer" })
  telephone: number;

  @CreateDateColumn({ type: "date" })
  registrationDate: string;

  @ManyToOne(() => Client, (client) => client.contacts)
  @JoinColumn()
  client: Client;
}

export { Contact };
