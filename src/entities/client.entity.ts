import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from ".";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  fullName: string;

  @Column({ type: "integer" })
  telephone: number;

  @Column({ type: "date" })
  registrationDate: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}

export { Client };
