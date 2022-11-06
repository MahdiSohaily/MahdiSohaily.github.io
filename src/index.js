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

  function userAction(type) {
    switch (type) {
      case 'get-data':
        break;
      case '':
        break;
      default:
    }
  }

  const [post, setPost] = useState('');
  const [id, setID] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        setPost(post.title);
        setToast({
          type: 'success',
          message: `${post.id}-Data received successfully`,
        });
        setLoading(false);
      });
  }, [id]);

  function handlePostId(e) {
    setID(e.target.value);
    setLoading(true);
  }

  return (
    <div>
      <div>
        <h1> {post}</h1>
      </div>
      <div>
        <label htmlFor="post_id">
          Post ID:
          <input
            id="post_id"
            type="number"
            name="post_id"
            value={id}
            min={1}
            onChange={handlePostId}
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
