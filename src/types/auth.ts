// Centralized Customer Auth & Account Domain Types

export type CustomerRole = 'VIP_MEMBER' | 'VIP Skincare Member' | 'Gold Beauty Member' | 'Silver Member' | string;

export interface CustomerUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: CustomerRole;
  membershipTier?: string;
  avatarUrl?: string;
  createdAt?: string;
  cashbackPoints?: number;
}

export type UserModel = CustomerUser;

export interface LoginDto {
  email: string;
  password?: string;
  rememberMe?: boolean;
}

export type LoginPayload = LoginDto;

export interface SignupDto {
  fullName: string;
  email: string;
  phone: string;
  password?: string;
  agreeTerms?: boolean;
}

export type SignupPayload = SignupDto;

export interface AuthResponse {
  user: CustomerUser;
  token?: string;
  accessToken?: string;
}

export type AuthResponseModel = AuthResponse;
