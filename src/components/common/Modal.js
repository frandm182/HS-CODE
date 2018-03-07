import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <div>
       {this.props.show && <div
          className="Backdrop"
          onClick={ev => {ev.preventDefault(); ev.stopPropagation();this.props.closeModal();}}
          role="presentation"
          onKeyDown={() => {}}
        />}
        <div
          className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          onClick={ev => {ev.preventDefault(); ev.stopPropagation();}}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  closeModal: PropTypes.func
};

export default Modal;
