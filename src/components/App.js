
import {NavBar} from './'
import { AddHabits, DailyView, WeekView } from '../pages';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WeekView/>
      <AddHabits/>
    </div>
  );
}

export default App;
