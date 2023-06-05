"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrate1685043594634 = void 0;
class Migrate1685043594634 {
    constructor() {
        this.name = 'Migrate1685043594634';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "clients" ADD "email" character varying(45) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(120) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying(45) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "registrationDate" SET DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "registrationDate" SET DEFAULT now()`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "registrationDate" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "registrationDate" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_b48860677afe62cd96e12659482"`);
            yield queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "email"`);
        });
    }
}
exports.Migrate1685043594634 = Migrate1685043594634;
