
import './globals.css';

export const metadata = {
  title: 'CRHI NGO Platform',
  description: 'Children\'s Raybridge of Hope Initiative',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
