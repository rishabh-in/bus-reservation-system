export const validateEmail = (email) => {
  // Email Validation
  const emailRegex = new RegExp(/^[a-zA-Z0-9._+-]+@[a-zA-Z.+-]+\.[a-zA-Z]{2,}$/)
  return emailRegex.test(email);
}

export const validatePassword = (password) => {
   // Password Validation
   const containUppercase = /[A-Z]/.test(password);
   const containerLowercase = /[a-z]/.test(password);
   const containeNumber = /[0-9]/.test(password);
   const passwordLength = password.length

   return (containUppercase && containerLowercase && containeNumber && passwordLength > 5);
}