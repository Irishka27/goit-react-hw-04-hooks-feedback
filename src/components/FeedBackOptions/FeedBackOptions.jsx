import PropTypes from 'prop-types';
import s from './FeedBackOptions.module.css';

function FeedBackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={s.button}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedBackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.exact({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  })).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
