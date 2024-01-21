'use client';
import React, { useState } from 'react';

export default function AuthForm({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsLoading] = useState(false);
  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type='submit'
        disabled={isloading}
      >
        {isloading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}
