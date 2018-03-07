import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import ListComponent from '../common/ListComponent';
import Button from '../common/Button';

const disabled = code => code < '01';

const CodeForm = ({ list, onClick, closeModal, editCode, saveCode, tabIndex }) => (
  <div>
    {editCode &&
    <div>
      <div>{editCode.chapter} - {editCode.heading} - {editCode.subheading} </div>

      <Tabs activeKey={tabIndex} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Chapters">
        <ListComponent list={list} onClick={id => onClick('chapter', id, 1)} />
        </Tab>
        <Tab eventKey={2} title="Headings" disabled={disabled(editCode.chapter)}>
        <ListComponent list={list} onClick={id => onClick('heading', id, 2)} />
        </Tab>
        <Tab eventKey={3} title="Subheadings" disabled={disabled(editCode.chapter) || disabled(editCode.heading)}>
        <ListComponent list={list} onClick={id => onClick('subheading', id, 3)} />
        </Tab>
      </Tabs>
      <Button btnType="Danger" clicked={closeModal}>CANCEL</Button>
      <Button clicked={() =>saveCode(editCode)}>SAVE</Button>
    </div>
  }
   </div>

);

CodeForm.propTypes = {
  onClick: PropTypes.func,
  closeModal: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({})),
  editCode: PropTypes.shape({}),
  saveCode: PropTypes.func
};

export default CodeForm;
