// import { WeekBox } from "../components";
// import { getLast7Days } from "../utils/handleDate";

// function WeekView() {
//     return (
//       <div className="weekview">
//         <h2>Week View</h2>
//         {getLast7Days().map((day) => {
//             return <WeekBox
//             day = {day}
//             key = {day[0]}
//             />
//         })}
//       </div>
//     );
//   }
  
//   export default WeekView;
// pages/weekview.js
import { useSelector } from 'react-redux';
import { WeekBox } from "../components";
import { getLast7Days } from "../utils/handleDate";

function WeekView() {
  const isWeekCompleted = useSelector((state) => state.week.isWeekCompleted);

  return (
    <div className="weekview">
      <h2>Week View</h2>
      {getLast7Days().map((day) => {
        return (
          <WeekBox
            day={day}
            key={day[0]}
            isWeekCompleted={isWeekCompleted}
          />
        );
      })}
    </div>
  );
}

export default WeekView;
