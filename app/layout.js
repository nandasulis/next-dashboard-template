import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
