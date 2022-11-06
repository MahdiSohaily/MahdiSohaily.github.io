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

  function userAction(type, payload) {
    switch (type) {
      case 'get-data':
        console.log(payload);
        setPost(payload.title);
        setLoading(false);
        setToast({
          type: 'success',
          message: `${payload.id}-Data received successfully`,
        });
        break;
      case 'set_Id':
        setID(payload);
        setLoading(true);
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
        userAction('get-data', { title: post.title, id: post.id });
      });
  }, [id]);

  function handlePostId(e) {
    userAction('set_Id',e.target.value);
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
