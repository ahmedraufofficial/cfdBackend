import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container '> 
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                Lesssgooo 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-items'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/option1' className='nav-links' onClick={closeMobileMenu}>
                        Option1 
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/option2' className='nav-links' onClick={closeMobileMenu}>
                        Option2
                    </Link>
                </li>
                <li className='nav-items'>
                    <Link to='/option3' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Option3
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar