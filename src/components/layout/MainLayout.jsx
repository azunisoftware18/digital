import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Reusable enterprise layout architecture.
 * Integrates Navbar, Main Content (<Outlet />), and Footer.
 */
export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
