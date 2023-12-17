import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

/**
 * Functional component representing the navigation bar.
 * @returns {JSX.Element} - Rendered component.
 */
function NavBar() {
  // React Router hook to get the current location
  const location = useLocation();

  // Rendered component structure
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.Logo}>
        Habit Tracker
      </Link>
      {/* Render "Add Habit" link only if not on the "/add-habit" page */}
      {location.pathname !== '/add-habit' && (
        <Link to="/add-habit" className={styles.btn}>
          Add Habit
        </Link>
      )}
    </div>
  );
}

// Export the component as the default export
export default NavBar;
