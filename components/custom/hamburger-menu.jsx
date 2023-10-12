'use client'
import { slide as Menu } from 'react-burger-menu';

import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
faConfig.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import "./hamburger-menu.css";

export default function HamburgerMenu({ children }) {
    return (
        <Menu isOpen={false} className="hamburgerMenu" customBurgerIcon={ <FontAwesomeIcon icon={faBars} /> }
                customCrossIcon={ <FontAwesomeIcon icon={faXmark} /> } >
            {children}
        </Menu>
    )
}


// import Link from 'next/link'
// import { slide as Menu } from 'react-burger-menu'

// const HamburgerMenu = () => (<div className='relative p-2'>
//     <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-12' >
//         <Links />
//     </Menu>
// </div>)

// const HamburgerIcon = () => (<div className='p-1/2'><FontAwesomeIcon icon={faBars} /></div>)

// export const Links = () => (<>
//     <Link href="/"><a className='font-bold p-4'>Home</a></Link>
//     <Link href="/about"><a className='font-bold p-4'>About</a></Link>
// </>)

// export default HamburgerMenu