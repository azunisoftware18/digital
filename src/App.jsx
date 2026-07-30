import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ui/ScrollToTop';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
