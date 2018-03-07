import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Panel, ButtonToolbar, Button } from 'react-bootstrap';
import ListComponent from '../common/ListComponent';


const disabled = code => code < '01';

const CodeForm = ({ chapter, heading, subheading, onClick, closeModal, editCode, saveCode, tabIndex }) => (

 <Panel>
    {editCode &&
    <div>
      <Panel.Body  bsStyle='center'>
        <div>{`${editCode.chapter} - ${editCode.heading} - ${editCode.subheading}`}</div>
        <div>{editCode.name}</div>
      </Panel.Body>

      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className='CodeForm'>
        <Tab eventKey={1} title="Chapters">
        <ListComponent list={chapter} onClick={(id,name) => onClick('chapter', id, name, 1)} />
        </Tab>
        <Tab eventKey={2} title="Headings" disabled={disabled(editCode.chapter)}>
        <ListComponent list={heading} onClick={(id,name) => onClick('heading', id, name, 2)} />
        </Tab>
        <Tab eventKey={3} title="Subheadings" disabled={disabled(editCode.chapter) || disabled(editCode.heading)}>
        <ListComponent list={subheading} onClick={(id,name) => onClick('subheading', id, name, 3)} />
        </Tab>
      </Tabs>
      <ButtonToolbar>
        <Button bsStyle="danger" bsSize="large" onClick={closeModal} >
            CANCEL
        </Button>
        <Button bsStyle="success" bsSize="large" onClick={() =>saveCode(editCode)} disabled={disabled(editCode.subheading)} >
            SAVE
        </Button>
    </ButtonToolbar>
      
    </div>
  }
   </Panel>

);

CodeForm.propTypes = {
  onClick: PropTypes.func,
  closeModal: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({})),
  editCode: PropTypes.shape({}),
  saveCode: PropTypes.func
};

export default CodeForm;
