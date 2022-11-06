import { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Loading from './components/Loading/';
import Toast from './components/Toast/';
import './styles/index.css';

const initState = {
  tost: { type: 'info', message: '' },
  post: '',
  id: 1,
  loading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'get-data':
      return {
        ...state,
        title: action.title,
        loading: false,
        tost: {
          type: 'success',
          message: `${action.id}-Data received successfully`,
        },
      };
    case 'set_Id':
      return {
        ...state,
        id: action.id,
        loading: true,
      };
    default:
  }
}

export default function App() {
  const [{ tost, id, loading, post }, dispatch] = useReducer(
    reducer,
    initState
  );
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        dispatch({ type: 'get-data', title: post.title, id: post.id });
      });
  }, [id]);

  function handlePostId(e) {
    dispatch({ type: 'set_Id', id: e.target.value });
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
      <Toast type={tost.type} message={tost.message} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
