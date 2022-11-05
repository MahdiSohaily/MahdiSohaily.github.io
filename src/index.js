import ReactDOM from 'react-dom/client';
import Loading from './components/Loading/';
import Toast from './components/Toast/';
import './styles/index.css';

export default function App() {
  return (
    <div>
      <Loading />
      <Toast type='success' message='done' />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
