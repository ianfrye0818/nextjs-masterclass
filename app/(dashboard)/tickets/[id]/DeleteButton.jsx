'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleClick({}) {
    setLoading(true);
    const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (data.error) {
      console.log(error);
      setLoading(false);
    }
    if (!data.error) {
      router.push('/tickets');
      setLoading(false);
    }
  }
  return (
    <button
      className='btn-primary'
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
