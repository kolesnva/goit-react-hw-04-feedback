import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './SectionTitle/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;

    if (total === 0) {
      return 0;
    }

    const positivePercentage = (good * 100) / total;

    return Math.round(positivePercentage);
  };

  handleAddFeedback = event => {
    const name = event.currentTarget.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <div>
          <Section title="Please, leave your feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleAddFeedback}
            ></FeedbackOptions>
          </Section>

          <Section
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Section>
        </div>
      </>
    );
  }
}
