import React from 'react';
import Link from './Link';

//creating the navigation bar on top with reusable header objects
const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link href='/' className='item'>Accordion</Link>
            <Link href='/list' className='item'>Search</Link>
            <Link href='/dropdown' className='item'>Dropdown</Link>
            <Link href='/translate' className='item'>Translate</Link>
        </div>
    )
};

export default Header;