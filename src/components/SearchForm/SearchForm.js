import SearchToggle from '../SearchToggle/SearchToggle';
import { useEffect } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function SearchForm({onSubmit, searchRequest, onChange, filterIsOn, setFilterIsOn}) {

  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
  } = useFormWithValidation();

  useEffect(() => {
		setValues({search: searchRequest});
	  setIsValid(true);
	}, [searchRequest, setValues, setIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('обрабатываем форму профиля')
    onSubmit(values.search);
  }

  const onChangeHandler = (event) => {
    event.preventDefault();
    handleChange(event)
  }

  const getStatusMessage = () => {
    if (errors.search) {
    return 'Нужно ввести ключевое слово'
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={submitHandler}>
          <div className="search__wrapper">
            <input
              className="search__form-input"
              required
              id="search"
              type="text"
              name="search"
              value={values.search || ''}
              placeholder="Фильм"
              onChange={onChangeHandler}
            />
            <input type="submit"
            className="search__form-button"
            value='Поиск'
            disabled={!values.search || !isValid}
            />
          </div>
          <span className='search__error'>{getStatusMessage() || ''}</span>
        <SearchToggle
        className="search__toggle toggle"
        toggleValue="Короткометражки"
        onChange={onChange}
        filterIsOn={filterIsOn}
        setFilterIsOn={setFilterIsOn}
        />
      </form>
    </section>
  );
}

export default SearchForm;
