import { useState } from 'react';
import { Container } from './components/base/Container.styled';
import { FeedbackOptoins } from './components/FeedbackOptoins/FeedbackOptoins';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  // === Used  of common useState ===
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(state => ({
      ...state,
      [type]: state[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return parseInt((good * 100) / countTotalFeedback()) || 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();

  return (
    <Container>
      <FeedbackOptoins
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />

      {total !== 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};
