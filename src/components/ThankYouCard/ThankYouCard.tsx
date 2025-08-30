import ThankYouSvg from "../../images/illustration-thank-you.svg";

export type ThankYouCard = {
  selectedValue: number;
};

const ThankYouCard = ({ selectedValue }: ThankYouCard) => {
  return (
    <div className="card-inner card-thank-you">
      <img src={ThankYouSvg} alt="Thank you Illustration" />
      <div className="selected-rating-wrapper">
        You selected{" "}
        <span className="selected-rating" data-testid="thank-you-card-rating">
          {selectedValue}
        </span>{" "}
        out of 5
      </div>
      <h1 data-testid="thank-you-card-title">Thank you!</h1>
      <div className="description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </div>
    </div>
  );
};

export default ThankYouCard;
