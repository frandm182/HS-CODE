import React from 'react';
import PropTypes from 'prop-types';


const backdrop = ({ show, clicked }) =>
  show ? (
    <div        
      className='Backdrop'
      onClick={clicked}
      role="presentation"
      onKeyDown={() => {}}
    />
  ) : null;

backdrop.propTypes = { show: PropTypes.bool, clicked: PropTypes.func };

export default backdrop;