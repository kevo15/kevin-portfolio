import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useState } from 'react';
import Sidebar from '../../components/Navbar/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <button
  className={`hamburger-btn ${isSidebarOpen ? 'hamburger-btn-open' : 'hamburger-btn-closed'}`}
  onClick={toggleSidebar}
>
  {isSidebarOpen ? '✕' : '☰'}
</button>

      <Sidebar isOpen={isSidebarOpen} />

      <div
        style={{
          marginLeft: isSidebarOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease',
          padding: '20px',
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
