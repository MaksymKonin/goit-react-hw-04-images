import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AddSearchIcon } from 'icons/search.svg';
import css from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  // const handleChange = ({ target: { value } }) => {
  //   return setSearchValue(value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const searchValueTrim = searchValue.trim();
    onSubmit(searchValueTrim);
    setSearchValue(searchValueTrim);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <button type="submit" className={css.button}>
        <AddSearchIcon width={20} height={20} />
        <span className={css['button-label']}>Search</span>
      </button>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
