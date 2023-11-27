export const checkValidData = (email, password, fullName) => {

  const isFullNameValid = fullName ? /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName) : true;

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // Update the regular expression for password validation as per your requirements
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isFullNameValid) {
    return "Name is not valid"
  }

  if (!isEmailValid) {
    return "Email is not Valid";
  }
  if (!isPasswordValid) {
    return "Password is not Valid";
  }

  return null;
}
