import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu>
      <Menu.Item as={NavLink} exact to="/" activeClassName="active">
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/about" activeClassName="active">
        About
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
