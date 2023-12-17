// src/utils/handleDate.js

// Function to get the last 7 days along with their details
const getLast7Days = () => {
  // Define the days of the week and their corresponding colors
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const colorCode = ['#FF0000', "#FF7F00", "#FFFF00", "#00FF00", " #0000FF", "#4B0082", "#8B00FF"];

  // Get the current date
  const currentDate = new Date();
  const last7Days = [];

  // Iterate over the last 7 days
  for (let i = 6; i >= 0; i--) {
    // Calculate the date for the current iteration
    const pastDate = new Date(currentDate);
    pastDate.setDate(currentDate.getDate() - i);

    // Get the day of the week, its color, and the formatted date
    const dayOfWeekIndex = pastDate.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    const colorOfWeek = colorCode[dayOfWeekIndex];
    const formattedDate = `${pastDate.getDate()}-${pastDate.getMonth() + 1}-${pastDate.getFullYear()}`;

    // Push the details for the current day into the result array
    last7Days.push([formattedDate, dayOfWeek, colorOfWeek]);
  }

  // Return the array of last 7 days in reverse order
  return last7Days.reverse();
};

// Export the function to make it available for import in other modules
export {
  getLast7Days
};
