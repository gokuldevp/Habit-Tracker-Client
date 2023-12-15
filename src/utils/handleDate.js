const getNext7Days = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const colorCode = ['#FF0000', " #FF7F00", "#FFFF00", "#00FF00", " #0000FF", "#4B0082", "#8B00FF"]
    const currentDate = new Date();
    const next7Days = [];
  
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
  
      const dayOfWeekIndex = nextDate.getDay();
      const dayOfWeek = daysOfWeek[dayOfWeekIndex];
      const colorOfWeek = colorCode[dayOfWeekIndex];
  
      const formattedDate = `${nextDate.getDate()}-${nextDate.getMonth() + 1}-${nextDate.getFullYear()}`;
  
      next7Days.push([formattedDate,dayOfWeek,colorOfWeek]);
    }
  
    return next7Days;
  };

export {
    getNext7Days
}