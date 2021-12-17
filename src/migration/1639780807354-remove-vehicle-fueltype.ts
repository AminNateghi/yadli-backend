import {MigrationInterface, QueryRunner} from "typeorm";

export class removeVehicleFueltype1639780807354 implements MigrationInterface {
    name = 'removeVehicleFueltype1639780807354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "fuelType"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_fueltype_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."vehicle_fueltype_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6')`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "fuelType" "public"."vehicle_fueltype_enum" array NOT NULL DEFAULT '{0}'`);
    }

}
