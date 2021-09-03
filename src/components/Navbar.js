import { useState } from 'react';
import { Link } from 'react-router-dom'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ReactComponent as NavLogo } from '../assets/logo.svg'
// import { Container, Row, Col } from 'reactstrap';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen);

	return (
		<nav className="navbar">
			<div className="navbar--logo">
				<NavLogo />
			</div>
			<div className="navbar--links">
				<ButtonDropdown isOpen={isOpen} toggle={toggle}>
					<DropdownToggle caret color>
						Product
      				</DropdownToggle>
					<DropdownMenu>
						<DropdownItem><Link to="/overview">Overview</Link></DropdownItem>
						<DropdownItem>Pricing</DropdownItem>
						<DropdownItem>Marketplace</DropdownItem>
						<DropdownItem>Features</DropdownItem>
						<DropdownItem>Integrations</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
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