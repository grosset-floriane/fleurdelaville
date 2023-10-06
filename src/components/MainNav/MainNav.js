import React from 'react';
import { Link } from "react-router-dom";

const LINKS = [
    {link: '/works', label: 'Works'},
    {link: '/contact', label: 'Contact'},
    {link: '/about', label: 'About'},
    
]

const MainNav = () => {
    return (
        <ul>
        {LINKS.map(({link, label}) => (
          <li key={link}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>
    );
};

export default MainNav;