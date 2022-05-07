import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Navbar = ({title}) =>{
 
        return (
            <nav className="navbar  bg-primary">
            <h1>
             {title}
            </h1>
            <ul>
           
                <li>
                <Link to='/job'>Job Form</Link>
                </li>
                <li>
                <Link to='/pto'>PTO Request Form</Link>
                </li>
               
            </ul>
          </nav>
        )
    
}
 Navbar.defaultProps={
  title:'Toptech Options'
};
export default Navbar