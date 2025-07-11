import api from './api';

export async function login(email: string, password: string) {
  const res = await api.post('/auth/login', { email, password });
  const token = res.data.token;
  localStorage.setItem('token', token);
  return res.data;
}

export function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}