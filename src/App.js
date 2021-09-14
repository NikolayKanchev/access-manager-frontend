import Store from './utils/Store'
import HomePage from './pages/home/Home';
import NavBar from './components/navbar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Store>
      <NavBar/>
    </Store>
  );
}

export default App;
