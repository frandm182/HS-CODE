import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const ListComponent = ({ list, onClick }) =>
  <ListGroup>
     {list.map(element => (
         <ListGroupItem key={element.id} onClick={() => onClick(element.id, element.name)} >{element.id}  {element.name}</ListGroupItem>
     ))} 
  </ListGroup>

ListComponent.propTypes = { };

export default ListComponent;