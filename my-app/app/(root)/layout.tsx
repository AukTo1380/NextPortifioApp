import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
          <main className="font-sans antialiased text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
              <Navbar/>
        {children}
        <Footer/>
      </main>
    </>
  );
}
  