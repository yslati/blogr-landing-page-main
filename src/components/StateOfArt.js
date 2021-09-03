import { Container, Row, Col } from 'reactstrap';
import CircleBg from '../assets/bg-pattern-circles.svg'
import Phones from '../assets/illustration-phones.svg'

const StateOfArt = () => {
	return (
		<Container fluid>
			<Row className="state">
				<Col className="state_svg">
					<img src={CircleBg} alt="circle" className="state_CircleBg" />
					<img src={Phones} alt="Phone" className="state_Phones" />
				</Col>
				<Col className="state_info">
					<h2>State of the Art Infrastructure</h2>
					<p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
					This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default StateOfArt;