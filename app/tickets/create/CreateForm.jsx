'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const ticket = {
      title,
      body,
      priority,
      user_email: 'ianfrye3@gmail.com',
    };
    const response = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    });
    if (response.status === 201) {
      router.refresh();
      router.push('/tickets');
    }
    setIsLoading(false);
  }
  return (
    <form
      className='w-1/2'
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor='title'>Title</label>
      <input
        value={title}
        type='text'
        id='title'
        name='title'
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor='body'>Description</label>
      <textarea
        value={body}
        name='body'
        id='body'
        cols='30'
        rows='10'
        onChange={(e) => setBody(e.target.value)}
      />
      <select
        value={priority}
        name='priority'
        id='priority'
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
      <button
        className='btn-primary'
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add Ticket'}
      </button>
    </form>
  );
}
