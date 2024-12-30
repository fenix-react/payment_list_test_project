export type Paginate<T> = {
  entities: T[];
  limit: number;
  page: number;
  total: number;
};
