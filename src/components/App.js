import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './';  // Assuming the correct path to NavBar
import { AddHabits, DailyView, WeekView } from '../pages';
import '../styles/App.css';

/**
 * Main application component responsible for rendering different pages based on routes.
 * @returns {JSX.Element} - Rendered component.
 */
function App() {
  // Rendered component structure
  return (
    <div className="App">
      {/* Navigation bar component */}
      <NavBar />
      {/* React Router Routes for different pages */}
      <Routes>
        {/* Route for adding habits */}
        <Route path="/add-habit" element={<AddHabits />} />
        {/* Route for the main week view */}
        <Route path="/" element={<WeekView />} />
        {/* Route for daily view with dynamic day parameter */}
        <Route path="/habit/daily/:day" element={<DailyView />} />
      </Routes>
    </div>
  );
}

// Export the component as the default export
export default App;
