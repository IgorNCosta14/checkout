import { MigrationInterface, QueryRunner } from "typeorm"

export class paymentOptions1669232917488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
