import "./globals.css";
/** @type {import('next').Metadata} */
export const metadata = {
  title: "Can I Ferment It?",
  description: "Ask The Fermentalist Buddy your wildest fermentation questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
