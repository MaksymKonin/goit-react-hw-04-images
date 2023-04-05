import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';
import Modal from 'components/modal';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [statusModal, setStatusModal] = useState(false);

  const toggleModal = () => {
    setStatusModal(!statusModal);
  };

  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          className={css['imageGalleryItem-image']}
          src={webformatURL}
          alt=""
          onClick={toggleModal}
        ></img>
      </li>
      {statusModal && (
        <Modal largeImageURL={largeImageURL} onClose={toggleModal}>
          <img src={largeImageURL} alt="largeImage" />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
