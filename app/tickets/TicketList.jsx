import React from 'react';
import Link from 'next/link';

async function getTickets() {
  try {
    const response = await fetch('http://localhost:4000/tickets', { next: { revalidate: 60 } });
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  } catch (error) {
    return error.message;
  }
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className='card my-5'
        >
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p className='text-center'>There are no open tickets, yay!</p>}
    </>
  );
}
