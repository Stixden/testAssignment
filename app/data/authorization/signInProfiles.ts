export type SignInProfile = {
  email: string;
  password: string;
};

export const signInInvalidProfiles: SignInProfile[] = [
  {
    email: "invalid@mail.com",
    password: "password",
  },
];
