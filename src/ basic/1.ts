type User = {
  age: number;
  username: string;
  toggle: boolean;
  empty: null;
};

const callback = (a: number): number => {
  return 100 + a;
};

const UserOne: User = {
  age: 50,
  username: "Max",
  toggle: true,
  empty: null,
};

export { callback, UserOne };
