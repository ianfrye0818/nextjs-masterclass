import Loading from '../loading';
import TicketList from './TicketList';
import { Suspense } from 'react';

export const metadata = {
  title: 'Dojo Helpdesk | Tickets',
  description: 'A list of open tickets',
};

function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}

export default Tickets;
