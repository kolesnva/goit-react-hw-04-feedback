import propTypes from 'prop-types';

import { StatsList, StatsItem, StatsText } from './Statistics.Styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatsList className="statistics-list">
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Good: {good}
        </StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Neutral: {neutral}
        </StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">Bad: {bad}</StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Total: {total}
        </StatsText>
      </StatsItem>
      <StatsItem className="statistics-list__item">
        <StatsText className="statistics-list__item-text">
          Positive feedback: {positivePercentage}
        </StatsText>
      </StatsItem>
    </StatsList>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
