import { Container, Row, Col } from 'reactstrap';
import FooterLogo from '../assets/logo.svg'

const Footer = () => {
	return (
		<Container fluid>
			<Row className="footer">
				<Col className="footer__logo">
					<img src={FooterLogo} alt="Logo" />
				</Col>
				<Col className="footer__c footer__product">
					<h4>Product</h4>
					<p>Overview</p>
					<p>Pricing</p>
					<p>Marketplace</p>
					<p>Features</p>
					<p>Integrations</p>
				</Col>
				<Col className="footer__c footer__company">
					<h4>Company</h4>
					<p>About</p>
					<p>Team</p>
					<p>Blog</p>
					<p>Careers</p>

				</Col>
				<Col className="footer__c footer__connect">
					<h4>Connect</h4>
					<p>Contact</p>
					<p>Newsletter</p>
					<p>LinkedIn</p>

				</Col>
			</Row>
		</Container>
	);
}

export default Footer;