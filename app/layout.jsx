import './globals.css';
import { Rubik } from 'next/font/google';

//component imports
import NavBar from './components/NavBar/NavBar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Ninja Ticket System',
  description: 'Create IT Ticket issues',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
