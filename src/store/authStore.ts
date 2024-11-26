import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: {
    isAuthenticated: false,
    role: null,
  },
  login: async (username: string, password: string) => {
    // In a real app, this would make an API call
    if (username === 'admin' && password === 'admin') {
      set({
        user: {
          isAuthenticated: true,
          role: 'admin',
        },
      });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({
      user: {
        isAuthenticated: false,
        role: null,
      },
    });
  },
}));