export const createUserValidationSchema = {
  username: {
    isLength: {
      Options: {
        min: 5,
        max: 32,
      },
      errorMessage:
        "Username must be at least 5 characters with a max of 32 characters",
    },
    notEmpy: {
      errorMessage: "username cannot be empy",
    },
    isString: {
      errorMessage: "Username must be a string!",
    },
  },
  displayName: {
    notEmpy: true,
  },
  password: { notEmpy: true },
};
