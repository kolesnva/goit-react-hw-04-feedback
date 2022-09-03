import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './SectionTitle/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
import { Box } from './Box';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleAddFeedback = ({ option }) => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        return;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        return;
      case 'bad':
        setBad(bad => bad + 1);
        return;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = total => {
    if (total === 0) {
      return 0;
    }

    const positivePercentage = (good * 100) / total;

    return Math.round(positivePercentage);
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <>
      <Box>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleAddFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage + `%`}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </Box>
    </>
  );
}
