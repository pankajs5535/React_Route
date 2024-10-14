import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function Route_Navbar() {


    // const NavLinkCSS = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? 'bold' : 'normal',
    //         fontSize: isActive ? '22px' : '20px'  // Add units to fontSize
    //     };
    // }

    return (
        // to use Link call = import { Link } from 'react-router-dom'
        //This file should use nav instead of div to match your CSS styling.
        // <nav>
        //     <Link to='/'>Home</Link>
        //     <Link to='/about'>About</Link>
        //     <Link to='/contact'>Contact</Link>
        // </nav>

        // to use Link call = import { Link } from 'react-router-dom'
        // <nav>
        //     <div className="logo">MyWebsite</div>
        //     <div className="nav-links">
        //         <Link to='/'>Home</Link>
        //         <Link to='/about'>About</Link>
        //         <Link to='/contact'>Contact</Link>
        //     </div>
        // </nav>

        // <nav>
        //     <div className="logo">MyWebsite</div>
        //     <div className="nav-links">
        //         <NavLink to='/'>Home</NavLink>
        //         <NavLink to='/product'>Product</NavLink>
        //         <NavLink to='/about'>About</NavLink>
        //         <NavLink to='/contact'>Contact</NavLink>
        //         <NavLink to='-'>Login</NavLink>


        //     </div>
        // </nav>

        // <nav>
        //     <div className="logo">MyWebsite</div>
        //     <div className="nav-links">
        //         <NavLink style={NavLinkCSS} to='/'>Home</NavLink>
        //         <NavLink style={NavLinkCSS} to='/about'>About</NavLink>
        //         <NavLink style={NavLinkCSS} to='/contact'>Contact</NavLink>
        //     </div>
        // </nav >

        <nav>
            <div className="logo">MyWebsite</div>
            <div className="nav-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='-'>Login</NavLink>


            </div>
        </nav>


    )

}

export default Route_Navbar
