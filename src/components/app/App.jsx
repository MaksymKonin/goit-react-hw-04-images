import { Component } from 'react';
import Searchbar from 'components/searchbar';
import SearchForm from 'components/searchForm';

import css from './App.module.css';

class App extends Component {
  state = {
    searchQuery: '',
  };

  formSubmithandle = data => {
    console.log('formSubmithandle');
    this.setState({ searchQuery: data.searchQuery });
  };

  render() {
    console.log(this.state.searchQuery);
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm onSubmit={this.formSubmithandle} />
        </Searchbar>
      </div>
    );
  }
}

export default App;
