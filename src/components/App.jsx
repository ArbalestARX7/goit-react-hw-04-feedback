import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

const feedbackTypes = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good + 1);

      case 'bad':
        return setBad(bad + 1);

      case 'neutral':
        return setNeutral(neutral + 1);

      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const positivePerc = Math.round((good * 100) / totalFeedback) || 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          variations={feedbackTypes}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePerc={positivePerc}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
