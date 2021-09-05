import FooterLogo from '../assets/logo.svg'

const Footer = () => {
	return (
		<div className="footer flex md:flex-row">
			<div className="footer__logo">
				<img src={FooterLogo} alt="Logo" />
			</div>
			<div className="footer__c footer__product">
				<h4>Product</h4>
				<p>Overview</p>
				<p>Pricing</p>
				<p>Marketplace</p>
				<p>Features</p>
				<p>Integrations</p>
			</div>
			<div className="footer__c footer__company">
				<h4>Company</h4>
				<p>About</p>
				<p>Team</p>
				<p>Blog</p>
				<p>Careers</p>

			</div>
			<div className="footer__c footer__connect">
				<h4>Connect</h4>
				<p>Contact</p>
				<p>Newsletter</p>
				<p>LinkedIn</p>

			</div>
		</div>
	);
}

export default Footer;