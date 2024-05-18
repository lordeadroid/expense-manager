type TRes = {
  status: boolean;
  error?: string;
};

type TUsernameAvailable = (username: string) => Promise<TRes>;

export { TRes, TUsernameAvailable };
