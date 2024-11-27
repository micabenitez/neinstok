import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-raleway">
      
        {children}
      
      </body>
    </html>
  );
}
