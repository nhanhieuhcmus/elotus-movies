import Input from "../Input/Input";
import Button from "../Button/Button";

import "./SearchBar.scss";

interface SearchBarProps {
  value: string;
  onInputChange: (val: string) => void;
  onSearch: (query: string) => void;
}

export default function SearchBar({
  value,
  onInputChange,
  onSearch,
}: SearchBarProps) {
  const handleChangeInput = (e: { target: { value: string } }) =>
    onInputChange(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };
  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={value}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
      <Button className="small" onClick={() => onSearch(value)}>
        Search
      </Button>
    </div>
  );
}
