import React from 'react';
import { Panel } from 'react-bootstrap';
import CodeForm from './CodeForm';
import Modal from '../common/Modal';

const CodeOutput = ({ code, onClick }) => (
  
    <Panel bsStyle="primary" className='Panel'>
      <Panel.Heading>
        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
      </Panel.Heading>
      <Panel.Body onClick={onClick} bsStyle='center'>
        <div>{`${code.chapter} - ${code.heading} - ${code.subheading}`}</div>
        <div>{code.name}</div>
      </Panel.Body>
    </Panel>  
 
);

export default CodeOutput;
