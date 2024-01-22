import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h2>Not Found</h2>
      <p>Sorry, we could not find that ticket.</p>
      <Link href='/tickets'>Back to tickets</Link>
    </main>
  );
}
