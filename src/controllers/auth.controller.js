// Auth controller placeholders
import { registerUser, authenticateUser } from "../models/user.model.js";


export const register = (req, res) => {
  res.render('auth/register');
};

export const login = (req, res) => {
  res.render('auth/login');
};

export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login');
  })
};

export const handleRegister = (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = {id: Date.now(), name, email, password, role };
  registerUser(newUser);
  return res.redirect('/auth/login');
};

export const handleLogin = (req, res) => {
  const { email, password } = req.body;
  const user = authenticateUser(email, password);
  if (user) {
    req.session.user = { id: user.id, name: user.name, role: user.role };
    return res.redirect('/jobs');
  } else {
    return res.render('auth/login', { error: 'Invalid email or password' });
  }
};


