'use client';
import React, { useState } from 'react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== password2) {
      setError({ error: true, message: 'Passwords do not match!' });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor='password2'>Verify Password</label>
      <input
        type='password'
        name='password2'
        id='password2'
        value={password2}
        required
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button
        className='btn-primary'
        disabled={isLoading}
      >
        {isLoading ? 'Please Wait' : 'Signup'}
      </button>
      {error.isError && <p className='error'>{error.message}</p>}
    </form>
  );
}
