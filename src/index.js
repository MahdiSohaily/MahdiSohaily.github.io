import ReactDOM from "react-dom/client";

export default function App() {
  return ( <h1>Hello world</h1>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);