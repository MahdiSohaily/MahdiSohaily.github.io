import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/Loading/';
import Toast from './components/Toast/';
import './styles/index.css';

export default function App() {
  const [toast, setToast] = useState({
    typeof: 'info',
    message: 'new Message',
  });
  return (
    <div>
      <Loading />
      <Toast type={toast.typeof} message={toast.message} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
