import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-raleway">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
