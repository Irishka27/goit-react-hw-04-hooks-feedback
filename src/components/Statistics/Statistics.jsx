import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ stats, total, positivePercentage }) {
    return (
      <>
      <ul className={s.list}>
      {stats.map(([name, value]) => {
        return (
          <li className={s.item}>
            <p className={s.text}>
              {name}:<span>{value}</span>
            </p>
          </li>
          )
      })}
      </ul>
      <ul className={s.list}>
           <li className={s.item}>
          <p className={s.text}>
            Total: <span>{total}</span>
          </p>
        </li>
        <li className={s.item}>
          <p className={s.text}>
            Positive feedback:
            <span>{positivePercentage} %</span>
          </p>
        </li>
      </ul>
      </>
    );
  }
  
  Statistics.prototype = {
      stats: PropTypes.arrayOf(PropTypes.exact({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    })).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };
  
  export default Statistics;