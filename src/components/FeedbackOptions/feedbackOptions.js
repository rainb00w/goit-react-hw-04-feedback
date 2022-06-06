import PropTypes from 'prop-types';
import s from './feedback.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div>
      {options.map(btn => (
        <button
          className={s.button5}
          value={btn}
          key={btn}
          type="button"
          onClick={() => onLeaveFeedback(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
