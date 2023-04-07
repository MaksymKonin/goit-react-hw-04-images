import { useEffect, useState } from 'react';
import { fetchSearchQuery } from 'api.js';
import Searchbar from 'components/searchbar';
import SearchForm from 'components/searchForm';
import ImageGallery from 'components/imageGallery';
import Message from 'components/message';
import Button from 'components/button';
import Loader from 'components/loader';

import css from './App.module.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isloadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await fetchSearchQuery(searchQuery, page);
        setImages(images =>
          images ? [...images, ...data.newImages] : data.newImages
        );
        setIsLoadMore(data.total > page ? true : false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [page, searchQuery]);

  const formSubmithandle = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages(null);
    setIsLoadMore(false);
  };

  const getMessage = () => {
    if (isError) {
      return `An error occurred, please reload the page or try again later`;
    } else if (images?.length === 0) {
      return `No pictures were found for your request ${searchQuery}`;
    } else if (images === null) {
      return 'Enter the name of the picture or photo';
    } else return null;
  };

  return (
    <div className={css.App}>
      <Searchbar>
        <SearchForm onSubmit={formSubmithandle} />
      </Searchbar>
      {getMessage() && <Message>{getMessage()}</Message>}
      {images?.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isloadMore && <Button onClick={() => setPage(page => page + 1)} />}
    </div>
  );
}
