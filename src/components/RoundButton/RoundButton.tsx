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
    <li data-testid={`round-button-rating-${value}`}>
      <button
        onClick={onClickHandler}
        className={`rating ${isSelected ? "selected" : ""}`}
        data-testid="round-button-value"
      >
        {value}
      </button>
    </li>
  );
};

export default RoundButton;
