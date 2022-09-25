function SearchToggle({toggleValue, className, setFilterIsOn, filterIsOn}) {
  const onFilterClick = () => {
    setFilterIsOn(!filterIsOn);
  };

  return (
    <div className={className}>
      <>
        <input type="checkbox" id="switch" className="toggle__input" onChange={onFilterClick} checked={filterIsOn}/>
        <label htmlFor="switch" className="toggle__label" />
      </>
      <span className="toggle__text">{toggleValue}</span>
    </div>
  );
}

export default SearchToggle;
