import s from "./Feedback.module.css";

export default function Feedback({ reviews, totalFeedback, positiveFeedback }) {
  return (
    <ul className={s.feedback}>
      <li>
        Good: <span className={s.feedbackGood}>{reviews.good}</span>
      </li>
      <li>Neutral: {reviews.neutral}</li>
      <li>
        Bad: <span className={s.feedbackBad}>{reviews.bad}</span>
      </li>
      <li>Total: {totalFeedback}</li>
      <li>
        Positive: <span className={s.feedbackGood}>{positiveFeedback}%</span>
      </li>
    </ul>
  );
}
