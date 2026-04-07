import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                {/* Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Mobile hamburger */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* Mobile Menu */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/bookPage"}>Listed Books</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
                            </li>
                        </ul>
                    </div>
                    <h2 className="text-xl font-bold text-pink-500">📚 Book Vibe</h2>
                </div>

                {/* Desktop Nav Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-2 border-pink-500 text-pink-500 rounded-lg'
                                        : 'hover:text-pink-400 transition-colors duration-200'
                                }
                                to={"/"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-2 border-pink-500 text-pink-500 rounded-lg'
                                        : 'hover:text-pink-400 transition-colors duration-200'
                                }
                                to={"/bookPage"}
                            >
                                Listed Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-2 border-pink-500 text-pink-500 rounded-lg'
                                        : 'hover:text-pink-400 transition-colors duration-200'
                                }
                                to={"/pages-to-read"}
                            >
                                Pages to Read
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="navbar-end gap-2">
                    <button className='btn bg-pink-100 text-pink-500 hover:bg-pink-200 border-none transition-all duration-200'>
                        Sign In
                    </button>
                    <button className='btn bg-pink-500 text-white hover:bg-pink-600 border-none transition-all duration-200'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;