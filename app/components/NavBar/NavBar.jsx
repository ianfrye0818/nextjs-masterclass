import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//photo import
import logo from './dojo-logo.png';

export default function NavBar() {
  return (
    <nav>
      <Image
        src={logo}
        alt='Ninja logo'
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h1>Dojo Helpdesk</h1>
      <Link href={'/'}>Home</Link>
      <Link href={'/tickets'}>Tickets</Link>
    </nav>
  );
}
