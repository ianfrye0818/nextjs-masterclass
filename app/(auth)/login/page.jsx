'use client';
import React, { useState } from 'react';
import AuthForm from '../AuthForm';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  //handle loging in with email and password
  async function handleSubmit(e, email, password) {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push('/tickets');
    }
  }
  return (
    <main>
      <h2 className='text-center'>Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <p className='error'>{error}</p>}
    </main>
  );
}
