'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function AddTicketButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className='btn-primary'
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
