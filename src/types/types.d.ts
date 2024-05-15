type TRes = {
  status: boolean;
  error?: string;
};

type TValidCredential = (
  username: string,
  password: string,
  hashedPassword: string
) => Promise<TRes>;

export { TRes, TValidCredential };
