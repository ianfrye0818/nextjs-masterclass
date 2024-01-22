'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TiDelete } from 'react-icons/ti';

export default function DeleteButton({ id }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleClick({}) {
    setLoading(true);
    const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();

    if (!data.error) {
      router.refresh();
      router.push('/tickets');
    } else {
      throw new Error(data.error);
    }
  }
  return (
    <button
      className='btn-primary'
      onClick={handleClick}
      disabled={loading}
    >
      {' '}
      <TiDelete />
      {loading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
