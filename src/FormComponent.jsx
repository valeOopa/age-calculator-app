import PropTypes from 'prop-types'

export default function FormComponent({day,month,year,setDay,setMonth,setYear,dayError,monthError,yearError}) {

  const handleInputDay = e => setDay(e.target.value);
  const handleInputMonth = e => setMonth(e.target.value);
  const handleInputYear = e => setYear(e.target.value);

  return (
        <>
          <div id="form__col-1" className='form__col'>
              <p className="form__title">DAY</p>
              <input type="number" className="form__input" defaultValue={day!=="-"?day:""} onInput={handleInputDay}/>
              <p className="form__error">{dayError[0] && dayError[1]}</p>
          </div>
          <div id="form__col-2" className='form__col'>
              <p className="form__title">MONTH</p>
              <input type="number" className="form__input" defaultValue={month!=="-"?month:""} onInput={handleInputMonth}/>
              <p className="form__error">{monthError[0] && monthError[1]}</p>
          </div>
          <div id="form__col-3" className='form__col'>
              <p className="form__title">YEAR</p>
              <input type="number" className="form__input" defaultValue={year==="-"?year:""} onInput={handleInputYear}/>
              <p className="form__error">{yearError[0] && yearError[1]}</p>
          </div>
          
        </>
  )
}

FormComponent.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  setDay: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  dayError: PropTypes.array.isRequired,
  monthError: PropTypes.array.isRequired,
  yearError: PropTypes.array.isRequired,
};