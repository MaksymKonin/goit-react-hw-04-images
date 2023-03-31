import { Component } from 'react';
import { fetchSearchQuery } from 'api.js';
import PropTypes from 'prop-types';
import ImageGallery from 'components/imageGallery';
import Message from 'components/message';
import Button from 'components/button';
import Loader from 'components/loader';

class SectionImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    loadMore: false,
    isLoading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;

    if (searchQuery !== prevProps.searchQuery) {
      try {
        this.setState({ isLoading: true });
        const { newImages, total } = await fetchSearchQuery(searchQuery, '1');
        this.setState({
          images: newImages,
          page: 1,
          loadMore: total > 1 ? true : false,
          error: false,
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (page !== prevState.page && page !== 1) {
      try {
        this.setState({ isLoading: true });
        const data = await fetchSearchQuery(searchQuery, page);
        this.setState(prev => ({
          images: [...prev.images, ...data.newImages],
          loadMore: data.total > page ? true : false,
          error: false,
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onClickLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  getMessage() {
    const { images, error } = this.state;
    if (images === null) {
      return 'Enter the name of the picture or photo';
    } else if (images?.length === 0) {
      return `No pictures were found for your request ${this.props.searchQuery}`;
    } else if (error) {
      return `An error occurred, please reload the page or try again later`;
    } else return null;
  }

  render() {
    const message = this.getMessage();
    const { images, loadMore, isLoading } = this.state;
    return (
      <>
        {message && <Message>{message}</Message>}
        {images?.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.onClickLoadMore} />}
      </>
    );
  }
}

export default SectionImageGallery;

SectionImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
