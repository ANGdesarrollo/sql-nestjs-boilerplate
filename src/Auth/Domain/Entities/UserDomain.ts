import { BaseDomain } from '../../../Shared/Domain/Repositories/BaseDomain';

export interface UserDomain extends BaseDomain {
  username: string;
  password: string;
  isAdmin: boolean;
  roles: string[];
  isActive: boolean;
  tenantId: string;
}
