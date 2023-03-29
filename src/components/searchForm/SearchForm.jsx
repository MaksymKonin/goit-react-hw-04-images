import { Component } from 'react';
import css from './SearchForm.module.css';
import { ReactComponent as AddSearchIcon } from 'icons/search.svg';

class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    return this.setState({ searchQuery: e.target.value.trim() });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(this.state);
    this.setState({
      searchQuery: '',
    });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.searchForm}>
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
          value={searchQuery}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
export default SearchForm;
