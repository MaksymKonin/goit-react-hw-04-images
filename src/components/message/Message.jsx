import PropTypes from 'prop-types';
import css from './Message.module.css';

const Message = ({ children }) => {
  return (
    <div>
      <p className={css.message}>{children}</p>
    </div>
  );
};
export default Message;

Message.propTypes = {
  children: PropTypes.node,
};
