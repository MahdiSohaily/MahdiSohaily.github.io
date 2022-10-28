import './styles/App.css';
import Clock from './components/Clock';
import EventHandler from './components/EventHandler';

function App() {
  return (
    <>
      <Clock />
      <EventHandler data="practice" />
    </>
  );
}

export default App;
