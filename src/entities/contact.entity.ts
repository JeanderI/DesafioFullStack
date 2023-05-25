import {
  Column,
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

  @Column({ type: "integer" })
  telephone: number;

  @Column({ type: "date" })
  registrationDate: Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  @JoinColumn()
  client: Client;
}

export { Contact };
