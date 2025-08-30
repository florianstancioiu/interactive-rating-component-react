import { render, screen } from "@testing-library/react";
import RoundButton from "./RoundButton";

describe("<RoundButton> component", () => {
  test("renders the component", () => {
    render(<RoundButton value={1} />);

    const valueElement = screen.getByTestId("round-button-value");

    expect(valueElement).toBeInTheDocument();
  });

  test("value matches 1", () => {
    render(<RoundButton value={1} />);

    const valueElement = screen.getByTestId("round-button-value");

    expect(+valueElement.innerHTML).toEqual(1);
  });

  test("value matches 1 and it's selected", () => {
    render(<RoundButton value={1} isSelected={true} />);

    const valueElement = screen.getByTestId("round-button-value");

    expect(+valueElement.innerHTML).toEqual(1);
    expect(valueElement.classList.contains("selected")).toEqual(true);
  });

  test("value matches 1 and it's NOT selected", () => {
    render(<RoundButton value={1} isSelected={false} />);

    const valueElement = screen.getByTestId("round-button-value");

    expect(+valueElement.innerHTML).toEqual(1);
    expect(valueElement.classList.contains("selected")).toEqual(false);
  });
});
