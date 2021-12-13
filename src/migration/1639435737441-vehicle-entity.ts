import {MigrationInterface, QueryRunner} from "typeorm";

export class vehicleEntity1639435737441 implements MigrationInterface {
    name = 'vehicleEntity1639435737441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."vehicle_fueltype_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6')`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "brandName" character varying NOT NULL, "modelName" character varying NOT NULL, "year" integer NOT NULL, "licenseNo" character varying NOT NULL, "vin" character varying NOT NULL, "fuelType" "public"."vehicle_fueltype_enum" array NOT NULL DEFAULT '{0}', "description" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_fueltype_enum"`);
    }

}
