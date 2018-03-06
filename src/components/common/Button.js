import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ children, clicked, btnType, disabled }) => (
  <button
    disabled={disabled}
    className={['Button', btnType].join(' ')}
    onClick={clicked}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  clicked: PropTypes.func,
  btnType: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  btnType: 'Success',
  disabled: false
};

export default Button;