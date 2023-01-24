import React from 'react';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import './Header.css';

function Header() {
  return (
    <header className='navigation__header'>
        <Navbar/>
        <SearchForm/>
    </header>
  )
}

export default Header