import { Link, NavLink } from 'react-router-dom'
import s from './NavBar.module.css'
import { QrCodeGenerator } from '../QrCodeGenerator/QrCodeGenerator'

const NavBar = () => {
	return (
		<div className={s.navBarContainer}>
			<Link to='/generate'>Generate QR</Link>
			<Link to='/scan'>Scan QR</Link>
			<Link to='/generateHistory'>Generation history</Link>
			<Link to='/scanHistory'>Scan history</Link>
		</div>
	)
}
export { NavBar }
