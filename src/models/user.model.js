// In-memory storage for users
export const users = [];

// ✅ Register a new user (Recruiter or Job Seeker)
export const registerUser = (user) => {
  users.push(user);
  return true;
};

// ✅ Authenticate user during login
export const authenticateUser = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};

// ✅ Find user by email (useful for session / role checks)
export const findUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

