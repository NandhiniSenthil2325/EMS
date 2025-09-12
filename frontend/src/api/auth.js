import { v4 as uuid } from 'uuid';

const USERS_KEY = 'ems_users_v1';

function seed(){
  if(!localStorage.getItem(USERS_KEY)){
    const users = [
      { id: uuid(), name: 'Admin User', email: 'admin@demo.com', password: 'admin123', role:'admin' },
      { id: uuid(), name: 'John Employee', email: 'john@demo.com', password: 'john123', role:'employee' }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}
seed();

export const authService = {
  login: async (email, password) => {
    await new Promise(r => setTimeout(r, 300));
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if(!user) throw new Error('Invalid credentials');
    const token = { token: btoa(user.email + ':' + Date.now()), user };
    localStorage.setItem('ems_token', JSON.stringify(token));
    return token;
  },
  logout: () => {
    localStorage.removeItem('ems_token');
  },
  current: () => {
    try { return JSON.parse(localStorage.getItem('ems_token'))?.user || null; } catch(e){ return null; }
  }
};
