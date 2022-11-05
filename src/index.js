import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/Loading/';
import Toast from './components/Toast/';
import './styles/index.css';

export default function App() {
  const [toast, setToast] = useState({
    typeof: 'info',
    message: '',
  });

  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((post) => {
        setPost(post.title);
      });
  });
  return (
    <div>
      <div>
        <h1> {post}</h1>
      </div>
      {loading && <Loading />}
      <Toast type={toast.typeof} message={toast.message} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
