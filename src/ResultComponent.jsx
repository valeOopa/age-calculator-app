import PropTypes from 'prop-types'

export default function ResultComponent({timeLived}) {

  return (
    <div id='age-calculator-container__result-container'>
        <p className='result-container__result-text'><span className='result-text__number'>{timeLived.year!==null?timeLived.year:"- -"} </span>years</p>
        <p className='result-container__result-text'><span className='result-text__number'>{timeLived.month!==null?timeLived.month:"- -"} </span>months</p>
        <p className='result-container__result-text'><span className='result-text__number'>{timeLived.day!==null?timeLived.day:"- -"} </span>days</p>
    </div>
  )
  
}

ResultComponent.propTypes = {
  timeLived: PropTypes.object.isRequired
};