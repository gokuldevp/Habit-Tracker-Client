import { WeekBox } from "../components";
import { getNext7Days } from "../utils/handleDate";

function WeekView() {

    return (
      <div className="weekview">
        <h2>Week View</h2>
        {getNext7Days().map((day) => {
            return <WeekBox
            day = {day}
            key = {day[0]}
            />
        })}
      </div>
    );
  }
  
  export default WeekView;