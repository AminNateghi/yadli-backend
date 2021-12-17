import {MigrationInterface, QueryRunner} from "typeorm";

export class addedVehicleFueltype1639781035201 implements MigrationInterface {
    name = 'addedVehicleFueltype1639781035201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" ADD "fuelType" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP COLUMN "fuelType"`);
    }

}
