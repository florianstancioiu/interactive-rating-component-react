import { useState } from "react";
import StarSvg from "../../images/icon-star.svg";
import RoundButton from "../RoundButton/RoundButton";
import ThankYouCard from "../ThankYouCard/ThankYouCard";

const RatingComponent = () => {
  const [roundButtons, setRoundButtons] = useState([
    {
      value: 1,
      isSelected: false,
    },
    {
      value: 2,
      isSelected: false,
    },
    {
      value: 3,
      isSelected: false,
    },
    {
      value: 4,
      isSelected: false,
    },
    {
      value: 5,
      isSelected: false,
    },
  ]);
  const [showThankYouCard, setShowThankYouCard] = useState(false);

  const roundButtonOnSelectHandler = (value: number) => {
    const newRoundButtons = roundButtons
      .map((button) => {
        return { ...button, isSelected: false };
      })
      .map((button) => {
        if (button.value === value) {
          return { ...button, isSelected: true };
        }

        return button;
      });
    setRoundButtons(newRoundButtons);
  };
  const onSubmitClickHandler = () => {
    const selectedButtonValue = roundButtons.find(
      (button) => button.isSelected === true
    );

    if (!selectedButtonValue) {
      alert("Please select a number");
      return;
    }

    setShowThankYouCard(true);
  };

  const selectedButtonValue =
    roundButtons.find((button) => button.isSelected === true)?.value ?? 0;

  return (
    <div className="card">
      {!showThankYouCard && (
        <div className="card-inner card-initial">
          <div className="main-star">
            <img src={StarSvg} alt="Icon Star" />
          </div>
          <h1 data-testid="rating-card-title">How did we do?</h1>
          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="ratings-wrapper">
            {roundButtons.map((roundButton, index) => (
              <RoundButton
                onSelect={roundButtonOnSelectHandler}
                key={index}
                isSelected={roundButton.isSelected}
                value={roundButton.value}
              />
            ))}
          </div>
          <button
            onClick={onSubmitClickHandler}
            className="button"
            data-testid="rating-card-submit"
          >
            Submit
          </button>
        </div>
      )}
      {showThankYouCard && <ThankYouCard selectedValue={selectedButtonValue} />}
    </div>
  );
};

export default RatingComponent;
