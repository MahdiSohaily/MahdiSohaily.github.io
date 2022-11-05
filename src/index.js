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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((post) => {
        setPost(post.title);
        setToast({ type: 'success', message: 'Data received successfully' });
        setLoading(false);
      });
  });
  return (
    <div>
      <div>
        <h1> {post}</h1>
      </div>
      <div>
        <label for>
          Post ID:
          <input
            type="test"
            name="post_is"
            value={post}
            onChange={(e) => {
              setPost(e.target.value);
            }}
          />
        </label>
      </div>
      {loading && <Loading />}
      <Toast type={toast.typeof} message={toast.message} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
