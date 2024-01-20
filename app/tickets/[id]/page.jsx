import React from 'react';

async function getTicket(id) {
  try {
    const response = await fetch(`http://localhost:4000/tickets/${id}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error('error fetching data');
    }
    return response.json();
  } catch (error) {}
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  if (!ticket) {
    return <p className='text-center'>No Ticket found with this ID</p>;
  }

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>Create by: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <p className={`pill ${ticket.priority}`}>{ticket.priority}</p>
      </div>
    </main>
  );
}
