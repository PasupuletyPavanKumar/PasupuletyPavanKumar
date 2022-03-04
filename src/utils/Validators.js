export const _EMAIL_VALIDATOR = (value) => {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  if (value.length > 0) {
    if (!emailFormat.test(value)) return true;
  }
};

//Minimum eight characters, at least one letter and one number:

// const pwdFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//Minimum eight characters, at least one letter, one number and one special character:

//const pwdFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

//const pwdFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

//const pwdFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
export const _PWD_VALIDATOR = (value) => {
  const pwdFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (value.length > 0) {
    if (!pwdFormat.test(value)) return true;
  }
};
