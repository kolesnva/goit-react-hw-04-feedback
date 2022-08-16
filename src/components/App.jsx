import { Component } from 'react';

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

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>

        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage(total) + `%`}
          </p>
        </div>
      </>
    );
  }
}
