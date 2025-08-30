import StarSvg from "../../images/icon-star.svg";
import ThankYouSvg from "../../images/illustration-thank-you.svg";

const RatingComponent = () => {
  return (
    <div className="card">
      <div className="card-inner card-initial">
        <div className="main-star">
          <img src={StarSvg} alt="Icon Star" />
        </div>
        <h1>How did we do?</h1>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="ratings-wrapper">
          <div className="rating" data-val="1">
            1
          </div>
          <div className="rating" data-val="2">
            2
          </div>
          <div className="rating" data-val="3">
            3
          </div>
          <div className="rating" data-val="4">
            4
          </div>
          <div className="rating" data-val="5">
            5
          </div>
        </div>
        <button className="button">Submit</button>
      </div>
      <div className="card-inner card-thank-you hidden">
        <img src={ThankYouSvg} alt="Thank you Illustration" />
        <div className="selected-rating-wrapper">
          You selected <span className="selected-rating">5</span> out of 5
        </div>
        <h1>Thank you!</h1>
        <div className="description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
