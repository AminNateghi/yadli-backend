import {MigrationInterface, QueryRunner} from "typeorm";

export class userRoles1638884855198 implements MigrationInterface {
    name = 'userRoles1638884855198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_roles_enum" AS ENUM('admin', 'user')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "roles" "public"."user_roles_enum" array NOT NULL DEFAULT '{user}'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "enable" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "enable" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roles"`);
        await queryRunner.query(`DROP TYPE "public"."user_roles_enum"`);
    }

}
