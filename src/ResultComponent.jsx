import PropTypes from 'prop-types'

export default function ResultComponent({timeLived}) {
  return (
    <div>
        <p><span>{timeLived.day!==null?timeLived.day:"--"} </span>days</p>
        <p><span>{timeLived.month!==null?timeLived.month:"--"} </span>months</p>
        <p><span>{timeLived.year!==null?timeLived.year:"--"} </span>years</p>
    </div>
  )
  
}

ResultComponent.propTypes = {
  timeLived: PropTypes.object.isRequired
};