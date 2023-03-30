import { Component } from 'react';
import { fetchSearchQuery } from 'api.js';
// import PropTypes from 'prop-types';

import ImageGallery from 'components/imageGallery';
import Button from 'components/button';
import NoImages from 'components/noImages';

class SectionImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;
    if (searchQuery !== prevProps.searchQuery) {
      console.log('update serch');
      if (page === 1) {
        this.getPictures(searchQuery, page);
      } else this.setState({ images: [], page: 1 });
    }
    if (page !== prevState.page) {
      console.log('update page');
      this.getPictures(searchQuery, page);
    }
  }

  async getPictures(searchQuery, page) {
    console.log('getPictures');
    console.log('searchQuery', searchQuery);
    console.log('page', page);
    try {
      const data = await fetchSearchQuery(searchQuery, page);
      console.log('getPictures - try');
      console.log(data);
      this.addImeges(data.newImages);
    } catch (error) {
      console.log(error);
    }
  }

  addImeges(newImages) {
    this.setState(prev => ({ images: [...prev.images, ...newImages] }));
    console.log('addImeges');
  }

  onClickLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    console.log('page + 1');
  };

  render() {
    const { images } = this.state;
    if (images.length !== 0) {
      return (
        <>
          <ImageGallery images={images} />
          <Button onClick={this.onClickLoadMore} />
        </>
      );
    } else return <NoImages />;
  }
}

export default SectionImageGallery;

// ImageGallery.propTypes = {
//   dataTransactions: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ),
//   onClickImage: PropTypes.func.isRequired,
// };
