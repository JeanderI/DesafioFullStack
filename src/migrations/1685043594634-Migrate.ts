import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1685043594634 implements MigrationInterface {
    name = 'Migrate1685043594634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "email" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "registrationDate" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "registrationDate" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "registrationDate" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "registrationDate" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_b48860677afe62cd96e12659482"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "email"`);
    }

}
