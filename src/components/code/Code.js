import React from 'react';
import CodeForm from './CodeForm';
import CodeOutput from './CodeOutput';
import Modal from '../common/Modal'

const Code = props => (
  <div>
    <CodeOutput 
        onClick={() => props.actions.loadCode(props.state.code)}
        code={props.state.code} />   
    <Modal show={props.state.modal} closeModal={props.actions.toggleModal}>
      <CodeForm
        chapter={props.state.codes}
        heading={props.state.heading}
        subheading={props.state.subheading}
        onClick={props.actions.addCode}
        closeModal={props.actions.toggleModal}
        editCode={props.state.editCode}
        tabIndex={props.state.tabIndex}
        saveCode={props.actions.saveCode}/>
    </Modal>
  </div>
);

export default Code;
