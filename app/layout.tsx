
export const metadata = {
  title: "Children Raybridge of Hope Initiative",
  description: "Empowering vulnerable children and communities across Northeast Nigeria."
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
