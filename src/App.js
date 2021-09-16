import { ToastContainer } from 'react-toastify';
import { LoaderProvider } from "./context/loader";
import { Routes } from './services/routes';

function App() {
  return (
    <LoaderProvider>
      <>
        <ToastContainer />
        <Routes />
      </>
    </LoaderProvider>
  );
}

export default App;
