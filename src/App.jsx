import "./App.css";
import Description from "./components/description/Description.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Notification from "./components/notification/Notification.jsx";

import { useEffect, useState } from "react";

function App() {
  const [reviews, setReviews] = useState(() => {
    const good = window.localStorage.getItem("saved-good");
    const neutral = window.localStorage.getItem("saved-neutral");
    const bad = window.localStorage.getItem("saved-bad");

    if (good !== null && neutral !== null && bad !== null) {
      return {
        good: +good,
        neutral: +neutral,
        bad: +bad,
      };
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-good", reviews.good);
    window.localStorage.setItem("saved-neutral", reviews.neutral);
    window.localStorage.setItem("saved-bad", reviews.bad);
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
