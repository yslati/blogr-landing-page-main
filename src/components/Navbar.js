import { Link } from 'react-router-dom'
import { ReactComponent as NavLogo } from '../assets/logo.svg'
// import { Container, Row, Col } from 'reactstrap';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar--logo">
				<NavLogo />
			</div>
			<div className="navbar--links">
				<Link to="/product">Product</Link>
				<Link to="/company">Company</Link>
				<Link to="/connect">Connect</Link>
			</div>
			<div className="navbar--login">
				<Link to="login">Login</Link>
				<Link to="signup" className="sign_up" >Sign Up</Link>
			</div>
		</nav>
	);
}

export default Navbar;