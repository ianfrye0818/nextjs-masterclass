import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//photo import
import logo from './dojo-logo.png';
import { Space_Mono } from 'next/font/google';
import LogoutButton from './LogoutButton';

export default function NavBar({ user }) {
  return (
    <nav>
      <Link href={'/'}>
        <Image
          src={logo}
          alt='Ninja logo'
          width={70}
          quality={100}
          placeholder='blur'
        />
      </Link>
      <h1>Dojo Helpdesk</h1>
      <Link href={'/'}>Home</Link>
      <Link href={'/tickets'}>Tickets</Link>
      <Link
        className='mr-auto btn-primary p-2'
        href={'/tickets/create'}
      >
        New Ticket
      </Link>
      {user && <span>{user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
