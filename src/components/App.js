import { Route, Routes } from 'react-router-dom';
import { NavBar } from './';
import { AddHabits, DailyView, WeekView } from '../pages';
import '../styles/App.css';

function App() {
  return (
    // <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/add-habit" element={<AddHabits />} />
        <Route path="/" element={<WeekView />} />
        <Route path="/habit/daily/:day" element={<DailyView />} />
      </Routes>
    </div>
  );
}

export default App;
