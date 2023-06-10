import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <section className={css.wrapper}>
      <h2 className={css.message}>{message}</h2>
    </section>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
