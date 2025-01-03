export abstract class BaseRepository<D, T>
{
  abstract create(payload: Partial<D>): Promise<T>
}
