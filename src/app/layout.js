import './globals.css';
import { Outfit } from 'next/font/google';

const outfitFont = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Side',
  description: 'The Exchange Layer of Web3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfitFont.className}>{children}</body>
    </html>
  );
}
