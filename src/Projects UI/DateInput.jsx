import calendarIcon from '../../public/images/calenderIcon';

const DateInput = ({ label, projectDate, openCalendar }) => {

  return (

    <div className="date_input">
        <div className="date_input_title">{label}</div>

        <div className="date_input_btn" onClick={(e) => openCalendar(e)}>
            <p className="date_input_txt">{projectDate}</p>
            <div className="calendar_icon">{calendarIcon}</div>
        </div>
    </div>

  )

}

export default DateInput