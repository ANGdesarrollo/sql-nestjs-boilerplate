import { BaseDomain } from '../../../Shared/Domain/Repositories/BaseDomain';

export interface UserDomain extends BaseDomain {
  username: string;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}
