'use client';
import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
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
      <button
        className='btn-primary'
        disabled={isLoading}
      >
        {isLoading ? 'Please Wait' : 'Login'}
      </button>
    </form>
  );
}
