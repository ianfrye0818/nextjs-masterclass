'use client';
import { addTicket } from '../actions';
import AddTicketButton from './AddTicketButton';

export default function CreateForm() {
  return (
    <form
      action={addTicket}
      className='w-1/2'
    >
      <label>
        <span>Title:</span>
        <input
          name='title'
          required
          type='text'
        />
      </label>
      <label>
        <span>Title:</span>
        <textarea
          name='body'
          required
        />
      </label>
      <label>
        <span>Priority:</span>
        <select name='priority'>
          <option>Low Priority</option>
          <option>Medium Priority</option>
          <option>High Priority</option>
        </select>
      </label>
      <AddTicketButton />
    </form>
  );
}
