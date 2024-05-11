import PropTypes from 'prop-types'
import ArrowComponent from "./assets/ArrowComponent"

export default function DivisorComponent({day,month,year, setDayError, setMonthError, setYearError, setTimeLived}) {

  const buttonHandle = e => {
    e.preventDefault();

    //*Resteamos los estados de errores
    setDayError([false,null]);
    setMonthError([false,null]);
    setYearError([false,null]);
    let newDayError = false;
    let newMonthError = false;
    let newYearError = false;
    setTimeLived({
      day: null,
      month: null,
      year: null
    });


    //* Obtenemos la fecha actual
    const dateNow = new Date;

    //* La fecha ingresada por el usuario la pasamos a número
    const [dayInt, monthInt, yearInt] = [day,month,year].map(Number);
    
    //* Creamos una fecha con los datos del usuario
    const dateUser = new Date(year,month-1,day);

    //* Cramos una fecha restando la fecha actual con el cumpleaños
    const birthdate = new Date(dateNow.getTime() - dateUser.getTime());

    //* Evaluamos lo ingresado por el usuario

    //* Si le fecha es después de la fecha actual, lanzamos un error en el campo año
    if(birthdate < 0) {
      setYearError([true, 'Must be in the past']);
      newYearError = true;
    }

    //* Creamos un array con los meses que tienen 31 dias y lo que tienen menos de 31
    const monthWithout31Days = [2,4,6,9,11];
    const monthWith31Days = [1,3,5,7,8,10,12];

    //* El mes ingresado tiene que estar dentro del rango de meses(1-12)
    if(monthInt > 12 || monthInt < 1) {
      setMonthError([true, 'Must be a valid month']);
      newMonthError = true
    }

    //* Lanzamos un error si inserta un día que no existe en ningún mes
    if((dayInt > 31 || dayInt < 1)) {
      setDayError([true, 'Must be a valid day']);
      newDayError = true;
    }

    //* Lanzamos un error en caso de que la cantidad de dias no acuerde en base a los meses
    console.log((monthWith31Days.includes(monthInt) && (dayInt > 31 || dayInt < 1)) || (monthWithout31Days.includes(monthInt) && (dayInt > 30 || dayInt < 1) ))
    if((monthWith31Days.includes(monthInt) && (dayInt > 31 || dayInt < 1)) || (monthWithout31Days.includes(monthInt) && (dayInt > 30 || dayInt < 1) )) {
      setDayError([true, 'Must be a valid day']);
      newDayError = true;
    } 
    //* Analizamos el día con respecto a febrero
    if(monthInt === monthWithout31Days[0]/*February*/){
      //* Si el mes es bisiesto y el día es mayor a 29 o menor a 1, lanzamos el error
      if((yearInt%4 === 0 && yearInt%100 !== 0) || (yearInt%400 === 0)) {
        
        if(dayInt > 29 || dayInt < 1) {
          setDayError([true, 'Must be a valid day']);
          newDayError = true;
        }
      }
      //* Si el mes no es bisiesto y el día es mayor a 28 o menor a 1, lanzamos el error
      else if(dayInt > 28 || dayInt < 1) {
        setDayError([true, 'Must be a valid day']);
        newDayError = true;
      }
    }

    //* En caso de que no haya error, hacemos las cuentas para saber cuandos años, meses y dias tiene el usuario
    if(newDayError === false && newMonthError === false && newYearError === false) {
      //* Obtenemos los años especificos(con numero decimal)
      const specificYears = birthdate.getTime()/86400000/365;
      //* Obtenemos los meses
      const specificMonths = birthdate.getMonth();
      //* Obtenemos el día
      const specificDays = birthdate.getDate();
      //*  Insertamos los datos en el estado para mostrarselo al usuario
      setTimeLived({
        day: Math.floor(specificDays),
        month: Math.floor(specificMonths),
        year: Math.floor(specificYears)
      });
    }
    
  }

  return (
    <div id="form__divisor-container">
      <div id="divisor-container__line"></div>
      <button id="divisor-container__result-button" onClick={buttonHandle}>
        <ArrowComponent/>
      </button>
    </div>
  )
}

DivisorComponent.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  setDayError: PropTypes.func.isRequired,
  setMonthError: PropTypes.func.isRequired,
  setYearError: PropTypes.func.isRequired,
  setTimeLived: PropTypes.func.isRequired
};