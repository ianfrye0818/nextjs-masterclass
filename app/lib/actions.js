'use server';

import { LoginForm } from '@/app/(auth)/login/LoginForm';

export async function authenticate(formData) {
  try {
    await LoginForm('credentials', formData);
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials';
        default:
          return 'Something went wrong';
      }
    }
    throw error;
  }
}
