'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import AuthForm from '../AuthForm';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState('');

  //handle signing up with email and password
  async function handleSubmit(e, email, password) {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/api/auth/callback` },
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push('/verify');
    }
  }
  return (
    <main>
      <h2 className='text-center'>Sign Up</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <p className='error'>{error}</p>}
    </main>
  );
}
