import { render, screen } from "@testing-library/react";
import ThankYouCard from "./ThankYouCard";

describe("<ThankYouCard> component", () => {
  test("renders the component", () => {
    render(<ThankYouCard selectedValue={1} />);

    const cardRatingElement = screen.getByTestId("thank-you-card-rating");

    expect(+cardRatingElement.innerHTML).toEqual(1);
  });
});
