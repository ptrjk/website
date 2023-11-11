import React from 'react';
import { Link } from 'react-scroll';


function Navigation() {
    return <nav>
        <ul>
            <li>
                <Link
                    to="O mne"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className='link'
                >O mne</Link>
            </li>
            <li>
                <Link
                    to="Moje projekty"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className='link'
                >Moje projekty</Link>
            </li>
            <li>
                <Link
                    to="Moje schopnosti"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className='link'
                >Moje schopnosti</Link>
            </li>
            <li>
                <Link
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className='link'
                >Kontakt</Link>
            </li>
        </ul>
    </nav>
}



export default Navigation;