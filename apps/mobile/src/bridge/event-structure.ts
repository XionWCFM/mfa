export type EventStructure<T extends string, Payload> = {
  name: T;
  payload: Payload;
};
