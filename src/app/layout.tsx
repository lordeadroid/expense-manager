import Navbar from "./components/Navbar";
import "./style.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Expense Manager</title>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
