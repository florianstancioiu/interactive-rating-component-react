export type RoundButton = {
  value: number;
  isSelected?: boolean;
  onSelect?: (value: number) => void;
};

const RoundButton = ({ value, isSelected, onSelect }: RoundButton) => {
  const onClickHandler = () => {
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div data-testid={`round-button-rating-${value}`}>
      <div
        onClick={onClickHandler}
        className={`rating ${isSelected ? "selected" : ""}`}
        data-testid="round-button-value"
      >
        {value}
      </div>
    </div>
  );
};

export default RoundButton;
