import { useEffect } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handlePressEsc = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handlePressEsc);
    return () => window.removeEventListener('keydown', handlePressEsc);
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
