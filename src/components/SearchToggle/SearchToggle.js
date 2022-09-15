import { useState } from 'react';

function SearchToggle({toggleValue, className}) {
  const [isChecked, setIsCecked] = useState(true);

  const isCheckedHandler = () => {
    setIsCecked(!isChecked)
  }

  return (
    <div className={className}>
      <>
        <input type="checkbox" id="switch" className="toggle__input" onClick={isCheckedHandler} checked={isChecked}/>
        <label htmlFor="switch" className="toggle__label" />
      </>
      <span className="toggle__text">{toggleValue}</span>
    </div>
  );
}

export default SearchToggle;
