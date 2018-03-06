import React from 'react';

const Code = ({ code, onChange }) => (
  <div onClick={() => onChange(code)}>
    <div>{code.chapter}</div>
    <div>{code.heading}</div>
    <div>{code.subheading}</div>
    <div>{code.value}</div>  
  </div>
);

export default Code;