import { useState } from "react";

import FormComponent from "./FormComponent";
import DivisorComponent from "./DivisorComponent";
import ResultComponent from "./ResultComponent";

function App() {
  const  [day, setDay]  = useState("-");
  const  [month, setMonth] = useState("-");
  const  [year, setYear]  = useState("-");
  const [dayError, setDayError] = useState([false,null]);
  const [monthError, setMonthError] = useState([false,null]);
  const [yearError, setYearError] = useState([false,null]);
  const [timeLived, setTimeLived] = useState({
    day: null,
    month: null,
    year: null
  })
  
  return (
    <div id="age-calculator-container">
      <form>
        <FormComponent day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear} dayError={dayError} monthError={monthError} yearError={yearError} />
        <DivisorComponent day={day} month={month} year={year} setDayError={setDayError} setMonthError={setMonthError} setYearError={setYearError}  setTimeLived={setTimeLived} />
      </form>
      <ResultComponent timeLived={timeLived} dayError={dayError} monthError={monthError} yearError={yearError}   />
      
    </div>
  )
}

export default App
