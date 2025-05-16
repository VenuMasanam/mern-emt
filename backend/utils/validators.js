exports.validateSignupInput = (data) => {
  const { name, email, password, role } = data;
  if (!name || !email || !password || !role) {
    return { valid: false, message: 'All fields are required' };
  }
  return { valid: true };
};