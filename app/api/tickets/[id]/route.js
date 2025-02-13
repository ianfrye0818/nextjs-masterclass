import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function DELETE(_, { params }) {
  const { id } = params;
  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.from('Tickets').delete().eq('id', id);
  return NextResponse.json({ error });
}
