import React from 'react';
import ListComponent from '../common/ListComponent'
import Button from '../common/Button'
const CodeForm = ({ list, onClick, closeModal }) => (
  <div>
    <div></div> 
    <ListComponent list={list} onClick={id => onClick('chapter',id)} />
    <ListComponent list={list} onClick={id => onClick('heading',id)} />
    <ListComponent list={list} onClick={id => onClick('subheading',id)} />
    <Button btnType='Danger' clicked={closeModal}>CANCEL</Button>
    <Button clicked={() => console.log('save code')}>SAVE</Button>
  </div>
);

export default CodeForm;