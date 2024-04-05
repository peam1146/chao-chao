import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_items_renting_status" AS ENUM('available', 'unavailable');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__items_v_version_version_renting_status" AS ENUM('available', 'unavailable');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "items" ADD COLUMN "rentingStatus" "enum_items_renting_status";
ALTER TABLE "_items_v" ADD COLUMN "version_rentingStatus" "enum__items_v_version_version_renting_status";
ALTER TABLE "items" DROP COLUMN IF EXISTS "status";
ALTER TABLE "_items_v" DROP COLUMN IF EXISTS "version_status";`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

ALTER TABLE "items" ADD COLUMN "status" "enum_items_status";
ALTER TABLE "_items_v" ADD COLUMN "version_status" "enum__items_v_version_version_status";
ALTER TABLE "items" DROP COLUMN IF EXISTS "rentingStatus";
ALTER TABLE "_items_v" DROP COLUMN IF EXISTS "version_rentingStatus";`)
}
