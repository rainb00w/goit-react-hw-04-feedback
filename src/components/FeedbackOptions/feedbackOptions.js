import PropTypes from 'prop-types';
import s from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnNames = Object.keys(options);
  return (
    <div>
      {btnNames.map(btn => (
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
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
