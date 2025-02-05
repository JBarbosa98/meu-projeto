import { Link } from 'react-router-dom'

import Container from './Container';

import styles from './Navbar.module.css'
import logo from '../../img/logo_client.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt='Client'></img>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/clients">Clients</Link></li>
                    <li className={styles.item}><Link to="/company">Company</Link></li>
                    <li className={styles.item}><Link to="/contact">Contact</Link></li>
                    <li className={styles.item} ><Link to="/newclient">New Client</Link></li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;