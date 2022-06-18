import { useState } from "react";
import FeedBackOptions from '../FeedBackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';
import s from './App.module.css';

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = e => {
    switch (e.target.name) {
      case 'good':
        return setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        return setBad(prevState => prevState + 1);
        break;
      default:
        break;

    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedback = () => {
    return Math.round(( good / countTotalFeedback) * 100);
  };
 
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 && 
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedback()}
          />}
           
            {countTotalFeedback === 0 && <Notification message="There is no feedback" />
          }
        </Section>
      </div>
    );
  
}

export default App;
