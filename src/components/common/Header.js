import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>    
  </nav>
);

export default Header;
