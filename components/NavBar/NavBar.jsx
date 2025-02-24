import { Link, NavLink } from 'react-router-dom'
import s from './NavBar.module.css'
import { QrCodeGenerator } from '../QrCodeGenerator/QrCodeGenerator'

const NavBar = () => {
	return (
		<div className={s.navBarContainer}>
			<Link to='/qrcode-app-on-react/generate'>Generate QR</Link>
			<Link to='/qrcode-app-on-react/scan'>Scan QR</Link>
			<Link to='/qrcode-app-on-react/generateHistory'>Generation history</Link>
			<Link to='/qrcode-app-on-react/scanHistory'>Scan history</Link>
		</div>
	)
}
export { NavBar }
