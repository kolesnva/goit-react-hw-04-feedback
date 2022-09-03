import propTypes from 'prop-types';

import { ControlsWrap, Button } from './FeedbackOptionsStyled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ControlsWrap>
      {options.map((option, index) => {
        return (
          <Button
            type="button"
            name={option}
            onClick={() => onLeaveFeedback({ option })}
            key={index}
          >
            {option}
          </Button>
        );
      })}
    </ControlsWrap>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
