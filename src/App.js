import './styles/App.css';
import Clock from './components/Clock';
import EventHandler from './components/EventHandler';

class App extends React.Component {
  render() {
    return (
      <>
        <Clock />
        <EventHandler data="practice" />
      </>
    );
  }
}

export default App;
