import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';
import Modal from 'components/modal';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [statusModal, setStatusModal] = useState(false);
  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          className={css['imageGalleryItem-image']}
          src={webformatURL}
          alt=""
          onClick={() => setStatusModal(!statusModal)}
        ></img>
      </li>
      {statusModal && (
        <Modal
          largeImageURL={largeImageURL}
          onClose={() => setStatusModal(!statusModal)}
        >
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
