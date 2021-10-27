import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="w-100 d-flex justify-content-between align-items-center px-5">
        <span>Math Magicians</span>
        <ul className="navbar-nav">
          {links.map((link) => (
            <li key={link.id} className="nav-item px-3">
              <NavLink to={link.path} activeClassName="active-link" className="nav-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
