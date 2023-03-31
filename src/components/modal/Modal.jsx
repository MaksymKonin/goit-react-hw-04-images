import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
