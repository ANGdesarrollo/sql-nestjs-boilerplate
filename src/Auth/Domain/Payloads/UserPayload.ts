import { BinaryState } from '../../../Shared/Domain/Repositories/BinaryState';

export interface UserPayload {
  username: string;
  password: string;
  is_admin: BinaryState;
  is_active: BinaryState;
}
