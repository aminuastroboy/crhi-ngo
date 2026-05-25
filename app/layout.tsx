
import './globals.css'

export const metadata = {
  title: 'CRHI Enterprise Platform',
  description: 'Children Raybridge of Hope Initiative',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
