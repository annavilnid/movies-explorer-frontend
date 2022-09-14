import SearchToggle from "../SearchToggle/SearchToggle";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" onSubmit={(e)=>console.log(e.currentTarget)}>
          <div className="search__wrapper">
            <input
              className="search__form-input"
              placeholder="Фильм"
              onChange={(e)=>console.log(e.currentTarget.value)}
            />
            <input type="submit" className="search__form-button" value='Поиск'/>
          </div>
        <SearchToggle
        className="search__toggle toggle"
        toggleValue="Короткометражки"
        />
      </form>
    </section>
  );
}

export default SearchForm;
