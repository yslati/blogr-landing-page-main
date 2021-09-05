import { useState } from 'react';
import { Link } from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from 'reactstrap';
import { ReactComponent as NavLogo } from '../assets/logo.svg'

const Navbari = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar className="navbar" expand="md">
			<NavbarBrand>
				<Link to="/" className="navbar__logo"><NavLogo /></Link>
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar className="navbar--links">
				<Nav className="mr-auto" navbar>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>Product</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>Overview</DropdownItem>
							<DropdownItem>Pricing</DropdownItem>
							<DropdownItem>Marketplace</DropdownItem>
							<DropdownItem>Features</DropdownItem>
							<DropdownItem>Integrations</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>Company</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>About</DropdownItem>
							<DropdownItem>Team</DropdownItem>
							<DropdownItem>Blog</DropdownItem>
							<DropdownItem>Careers</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>Connect</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>Contact</DropdownItem>
							<DropdownItem>Newsletter</DropdownItem>
							<DropdownItem>LinkedIn</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
				<NavbarText>
					<div className="navbar--login">
						<Link to="login">Login</Link>
						<Link to="signup" className="sign_up" >Sign Up</Link>
					</div>
				</NavbarText>
			</Collapse>
		</Navbar>
	);
}

export default Navbari;