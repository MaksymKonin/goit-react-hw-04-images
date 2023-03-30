import { Component } from 'react';

import Searchbar from 'components/searchbar';
import SearchForm from 'components/searchForm';
import SectionImageGallery from 'components/sectionImageGallery';

import css from './App.module.css';

class App extends Component {
  state = {
    searchQuery: '',
  };

  formSubmithandle = ({ value }) => {
    console.log('formSubmithandle');
    this.setState({ searchQuery: value.trim() });
  };

  render() {
    console.log('render App');
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm onSubmit={this.formSubmithandle} />
        </Searchbar>
        <SectionImageGallery searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}

export default App;
