import {MigrationInterface, QueryRunner} from "typeorm";

export class addedNullableVehicleTable1643379370634 implements MigrationInterface {
    name = 'addedNullableVehicleTable1643379370634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "brandName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "modelName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "year" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "licenseNo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "vin" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "fuelType" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "fuelType" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "vin" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "licenseNo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "year" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "modelName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicle" ALTER COLUMN "brandName" SET NOT NULL`);
    }

}
