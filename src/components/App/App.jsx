import React, { Component } from 'react';
import FeedBackOptions from '../FeedBackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = e => {
    const option = e.target.name;
    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;

    let result = 0;
    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback * 100) / totalFeedback);
    }

    return result;
  };
  render() {
    const options = Object.keys(this.state);
    const countTotalFeedback = this.countTotalFeedback();
    const percent = this.countPositiveFeedback();
    const stats = Object.entries(this.state);
    
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 && 
            <Statistics
              stats={stats}
              total={countTotalFeedback}
              positivePercentage={percent}
            />}
           
            {countTotalFeedback === 0 && <Notification message="There is no feedback" />
          }
        </Section>
      </div>
    );
  }
}

export default App;
