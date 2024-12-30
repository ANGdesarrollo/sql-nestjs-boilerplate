import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class UserEntity {
  @PrimaryKey()
  id!: string;

  @Property({ unique: true })
  username!: string;

  @Property()
  password!: string;

  @Property({ default: false })
  isAdmin!: boolean;

  @Property({ type: 'json', default: [] })
  roles: string[] = [];

  @Property({ default: true })
  isActive!: boolean;

  @Property()
  tenantId!: string;

  @Property({ onCreate: () => new Date() })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
