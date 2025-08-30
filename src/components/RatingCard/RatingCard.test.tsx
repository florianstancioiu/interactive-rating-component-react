import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import RatingCard from "./RatingCard";

describe("<ThankYouCard> component", () => {
  test("renders the component", () => {
    render(<RatingCard />);

    const titleElement = screen.getByTestId("rating-card-title");

    expect(titleElement.textContent).toEqual("How did we do?");

    const buttons = [1, 2, 3, 4, 5];

    buttons.forEach((buttonValue) => {
      let buttonElement = screen.getByTestId(
        `round-button-rating-${buttonValue}`
      );

      expect(+buttonElement.children[0].innerHTML).toEqual(buttonValue);
    });
  });

  test("alert the user when he tries to click submit without clicking a number", () => {
    render(<RatingCard />);

    global.alert = vi.fn();

    const submitElement = screen.getByTestId("rating-card-submit");

    fireEvent.click(submitElement);

    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith("Please select a number");
  });

  test("select the number 3 and click submit", async () => {
    render(<RatingCard />);

    const buttonElement3 = screen.getByTestId("round-button-rating-3");
    const submitElement = screen.getByTestId("rating-card-submit");

    fireEvent.click(buttonElement3);
    fireEvent.click(submitElement);

    const thankYouRatingElement = await screen.findByTestId(
      "thank-you-card-rating"
    );

    expect(+thankYouRatingElement.innerHTML).toEqual(3);
  });
});
