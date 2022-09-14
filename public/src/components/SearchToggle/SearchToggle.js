function SearchToggle({toggleValue, className}) {
  return (
    <div className={className}>
      <>
        <input type="checkbox" id="switch" className="toggle__input" checked="true"/>
        <label htmlFor="switch" className="toggle__label" />
      </>
      <span className="toggle__text">{toggleValue}</span>
    </div>
  );
}

export default SearchToggle;
