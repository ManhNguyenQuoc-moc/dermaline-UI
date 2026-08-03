import { AuthResponseModel, LoginPayload, SignupPayload, UserModel } from './models/auth.model';

export const MOCK_CURRENT_USER: UserModel = {
  id: 'usr-101',
  fullName: 'Sophia Chen',
  email: 'sophia.chen@dermaline-beauty.com',
  phone: '+1 (555) 234-5678',
  role: 'VIP_MEMBER',
  membershipTier: 'Gold Beauty Member (5% Cashback)',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  createdAt: '2025-01-15T08:00:00Z',
};

export async function loginAsync(payload: LoginPayload): Promise<AuthResponseModel> {
  await new Promise((r) => setTimeout(r, 500));

  return {
    user: {
      ...MOCK_CURRENT_USER,
      email: payload.email,
      fullName: payload.email.split('@')[0].toUpperCase() || 'Sophia Chen',
    },
    accessToken: `mock-token-${Date.now()}`,
  };
}

export async function signupAsync(payload: SignupPayload): Promise<AuthResponseModel> {
  await new Promise((r) => setTimeout(r, 500));

  return {
    user: {
      id: `usr-${Date.now()}`,
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone || '+1 (555) 000-1111',
      role: 'VIP_MEMBER',
      membershipTier: 'Silver Member',
      createdAt: new Date().toISOString(),
    },
    accessToken: `mock-token-${Date.now()}`,
  };
}
