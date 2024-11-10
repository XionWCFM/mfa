const decode = <T>(data: string): T => {
  return JSON.parse(decodeURIComponent(atob(data))) as T;
};

const encode = <T>(data: T): string => {
  return btoa(encodeURIComponent(JSON.stringify(data)));
};

export const codec = { decode, encode };
