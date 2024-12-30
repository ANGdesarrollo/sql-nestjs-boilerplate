import { Migration } from '@mikro-orm/migrations';

export class Migration20241230031033 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "users" ("id" uuid not null default gen_random_uuid(), "username" varchar(50) not null, "password" varchar(255) not null, "is_admin" boolean not null default false, "is_active" boolean not null default true, "tenant_id" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, constraint "users_pkey" primary key ("id"));`);
    this.addSql(`alter table "users" add constraint "users_username_unique" unique ("username");`);
  }

}
