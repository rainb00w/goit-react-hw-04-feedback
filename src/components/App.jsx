import React, { Component } from 'react';
import Section from './Section/section.js';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = btnName => {
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
    // console.log(this.state);
  };

  totalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    return total;
  };

  positiveFeedback = () => {
    const total = this.totalFeedback();
    const percentage = Math.round((100 / total) * this.state.good);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnNames = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.totalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedback()}
            />
          ) : (
            'No feedback given'
          )}
        </Section>
      </div>
    );
  }
}

export default App;
