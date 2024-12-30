import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class UserEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id!: string;

  @Property({ unique: true, length: 50 })
  username!: string;

  @Property({ length: 255 })
  password!: string;

  @Property({ default: false })
  isAdmin: boolean = false;

  @Property({ default: true })
  isActive: boolean = true;

  @Property({ length: 255 })
  tenantId!: string;

  @Property({ onCreate: () => new Date() })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
