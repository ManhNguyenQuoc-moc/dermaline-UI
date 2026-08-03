import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MOCK_CURRENT_USER, loginAsync, signupAsync } from '@/services/customer/auth/auth.service';
import { LoginPayload, SignupPayload, UserModel } from '@/services/customer/auth/models/auth.model';

interface AuthState {
  user: UserModel | null;
  isLoggedIn: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  signup: (payload: SignupPayload) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: MOCK_CURRENT_USER, // Default logged in mock user for smooth demo
      isLoggedIn: true,

      login: async (payload) => {
        const res = await loginAsync(payload);
        set({ user: res.user, isLoggedIn: true });
      },

      signup: async (payload) => {
        const res = await signupAsync(payload);
        set({ user: res.user, isLoggedIn: true });
      },

      logout: () => {
        set({ user: null, isLoggedIn: false });
      },
    }),
    {
      name: 'dermaline_auth_store',
    }
  )
);
