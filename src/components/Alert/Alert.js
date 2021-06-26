import PropTypes from 'prop-types';
import s from './Alert.module.css';

function Alert({ text, type }) {
  //   const typeClass = type ? `Alert--${type}` : '';
  return (
    <p role="alert" className={`${s.alert} ${s[type]}`}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
};

export default Alert;
