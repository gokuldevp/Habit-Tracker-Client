const getLast7Days = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const colorCode = ['#FF0000', "#FF7F00", "#FFFF00", "#00FF00", " #0000FF", "#4B0082", "#8B00FF"];
  const currentDate = new Date();
  const last7Days = [];

  for (let i = 6; i >= 0; i--) {
    const pastDate = new Date(currentDate);
    pastDate.setDate(currentDate.getDate() - i);

    const dayOfWeekIndex = pastDate.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    const colorOfWeek = colorCode[dayOfWeekIndex];

    const formattedDate = `${pastDate.getDate()}-${pastDate.getMonth() + 1}-${pastDate.getFullYear()}`;

    last7Days.push([formattedDate, dayOfWeek, colorOfWeek]);
  }

  return last7Days.reverse(); // Reverse the array to maintain the correct chronological order
};

export {
  getLast7Days
};
