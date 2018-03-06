import React from 'react';
import PropTypes from 'prop-types';


const ListComponent = ({ list, onClick }) =>
  <ul>
     {list.map(element => (
         <li key={element.id} onClick={() => onClick(element.id)} >{element.id}</li>
     ))} 
  </ul>

ListComponent.propTypes = { };

export default ListComponent;