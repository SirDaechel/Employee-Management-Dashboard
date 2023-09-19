import { useState, useEffect, useRef } from "react"
import arrowLeft from '../../public/images/arrowLeft'
import arrowRight from '../../public/images/arrowRight'
import xIcon from '../../public/images/xIcon'

const Calendar = ({ setProjectDate, closeCalendar, showCalendar, setShowCalendar, endDateCalendarMargin }) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const currentDayOfMonth = currentDate.getDate();
    const calendarRef = useRef(null);

    const handleDayClick = (day) => {

        const dayWithSuffix = day + (day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th');

        const theFullDate = (`${dayWithSuffix} ${((currentDate.getMonth() + 1) === 1 && "January" || 
        (currentDate.getMonth() + 1) === 2 && "Febuary" ||
        (currentDate.getMonth() + 1) === 3 && "March" ||
        (currentDate.getMonth() + 1) === 4 && "April" ||
        (currentDate.getMonth() + 1) === 5 && "May" ||
        (currentDate.getMonth() + 1) === 6 && "June" ||
        (currentDate.getMonth() + 1) === 7 && "July" ||
        (currentDate.getMonth() + 1) === 8 && "August" ||
        (currentDate.getMonth() + 1) === 9 && "September" ||
        (currentDate.getMonth() + 1) === 10 && "October" ||
        (currentDate.getMonth() + 1) === 11 && "November" ||
        (currentDate.getMonth() + 1) === 12 && "December" || (currentDate.getMonth() + 1))} ${(currentDate.getFullYear()).toString()}`)

        // const selectedDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

        // console.log((`${selectedDay.getDate()} / ${(selectedDay.getMonth() + 1)} / ${selectedDay.getFullYear()}`).toString());

        showCalendar && setProjectDate(theFullDate);
        showCalendar && setShowCalendar(false);

    };


    // Function to get the days of the week
    const getDaysOfWeek = () => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return daysOfWeek.map((day) => <th className="calendar_weekdays" key={day}><p className="calendar_weekdays_txt">{day}</p></th>);
    };
  
    // Function to get the number of days in the current month
    const getDaysInMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
  
    // Function to check if the current year is a leap year
    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };
  
    // Function to generate the calendar grid
    const generateCalendar = () => {
      const daysOfWeek = getDaysOfWeek();
      const daysInMonth = getDaysInMonth(currentDate);
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const startingDay = firstDayOfMonth.getDay();
      const calendar = [];
  
      for (let i = 0; i < startingDay; i++) {
        calendar.push(<td key={`empty-${i}`}></td>);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        calendar.push(<td onClick={() => handleDayClick(day)} className="calendar_data" key={`day-${day}`}>{<p className="calendar_data_txt" style={{backgroundColor: currentDayOfMonth === day ? "#6C63FF" : "", color: currentDayOfMonth === day ? "#FFF" : "",}}>{day}</p>}</td>);
      }
  
      const totalDays = daysOfWeek.length * Math.ceil(calendar.length / daysOfWeek.length);
  
      while (calendar.length < totalDays) {
        calendar.push(<td key={`empty-${calendar.length}`}></td>);
      }
  
      const calendarRows = [];
      for (let i = 0; i < totalDays; i += daysOfWeek.length) {
        const week = calendar.slice(i, i + daysOfWeek.length);
        calendarRows.push(<tr key={`week-${i}`}>{week}</tr>);
      }
  
      return calendarRows;
    };
  
    // Function to navigate to the previous month
    const goToPreviousMonth = () => {
      const previousMonth = new Date(currentDate);
      previousMonth.setMonth(previousMonth.getMonth() - 1);
      setCurrentDate(previousMonth);
    };
  
    // Function to navigate to the next month
    const goToNextMonth = () => {
      const nextMonth = new Date(currentDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setCurrentDate(nextMonth);
    };
      
    useEffect(() => {

        //Update the date every 24 hours
        const interval = setInterval(() => {
            setDate(new Date());
        }, 86400000); // Update every 24 hours

        // //Update the date every 24 hours
        // const interval = setInterval(() => {
        //     setDate(new Date());
        // }, 1000); // Update every second
      
        return () => clearInterval(interval);

    }, [currentDate]);

    // Event listener to close the calendar when clicking outside
    useEffect(() => {

      const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
          setShowCalendar(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };

    }, []);

  return (

    <section>
        
        <div ref={calendarRef} className="calendar_container" style={{top: endDateCalendarMargin ? "12%" : ""}}>

            <div className="calendar_header">
                <p className="calendar_txt">Select Date</p>
                <button className="calendar_close" onClick={() => closeCalendar()}>{xIcon}</button>
            </div>

            <div className="calendar_nav">
                <button className="calendar_prev_month" onClick={() => goToPreviousMonth()}>{arrowLeft}</button>
                <p className="calendar_txt">{currentDate.toLocaleString('default', { month: 'long' })}{' '}
          {currentDate.getFullYear()}</p>
                <button className="calendar_next_month" onClick={() => goToNextMonth()}>{arrowRight}</button>
            </div>

            <table className="calendar_body">
                <thead>
                    <tr>{getDaysOfWeek()}</tr>
                </thead>
                <tbody>
                    {generateCalendar()}
                </tbody>
            </table>

        </div>
        
    </section>

  )

}

export default Calendar