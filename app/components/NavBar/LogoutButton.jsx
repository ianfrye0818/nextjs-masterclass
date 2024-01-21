'use client';
import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  async function handleLogOut() {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/login');
    }
    if (error) {
      console.log(error);
    }
  }

  return (
    <button
      className='btn-primary'
      onClick={handleLogOut}
    >
      Logout
    </button>
  );
}
