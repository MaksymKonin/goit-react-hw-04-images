import { useState } from 'react';

import Searchbar from 'components/searchbar';
import SearchForm from 'components/searchForm';
import SectionImageGallery from 'components/sectionImageGallery';

import css from './App.module.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const formSubmithandle = ({ value }) => {
    setSearchQuery(value.trim());
  };

  return (
    <div className={css.App}>
      <Searchbar>
        <SearchForm onSubmit={formSubmithandle} />
      </Searchbar>
      <SectionImageGallery searchQuery={searchQuery} />
    </div>
  );
}
