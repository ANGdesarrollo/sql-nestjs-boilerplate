import { BaseRepository } from '../../Shared/Domain/Repositories/BaseRepository';
import { UserDomain } from '../Domain/Entities/UserDomain';
import { UserPayload } from '../Domain/Payloads/UserPayload';

export abstract class UserRepository extends BaseRepository<UserPayload, UserDomain> {}
