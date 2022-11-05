import ReactDOM from 'react-dom/client';
import Loading from './components/Loading/';
import './styles/index.css';

export default function App() {
  return (
    <div>
      <Loading />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
