import './App.css';
import Meal from './components/Meal/Meal';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Meal></Meal>
    </div>
  );
}

export default App;
