import { BaseDomain } from '../../../Shared/Domain/Repositories/BaseDomain';
import { UserPayload } from '../Payloads/UserPayload';

export interface UserDomain extends UserPayload, BaseDomain {
  tenant_id: string | null;
  roles: string[];
}

