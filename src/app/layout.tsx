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
        <nav id="navbar">expense manager</nav>
        {children}
      </body>
    </html>
  );
}
