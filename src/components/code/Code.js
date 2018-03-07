import React from 'react';
import CodeForm from './CodeForm';
import Modal from '../common/Modal'

const Code = props => (
  <div onClick={() => props.actions.loadCode(props.state.code)}>
    <div>{props.state.code.chapter}</div>
    <div>{props.state.code.heading}</div>
    <div>{props.state.code.subheading}</div>
    <div>{props.state.code.value}</div>
    <Modal show={props.state.modal} closeModal={props.actions.toggleModal}>
      <CodeForm
        list={props.state.codes}
        onClick={props.actions.addCode}
        closeModal={props.actions.toggleModal}
        editCode={props.state.editCode}
        tabIndex={props.state.tabIndex}
        saveCode={props.actions.saveCode} />
    </Modal>
  </div>
);

export default Code;
