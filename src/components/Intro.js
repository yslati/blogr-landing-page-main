import Navbari from './Navbari';
import BgIntro from '../assets/bg-pattern-intro.svg'

const Intro = () => {
	return (
		<div className="intro">
			<Navbari />
			<img src={BgIntro} alt="background into" className="bg--image object-top" />
			<div className="intro--info">
				<h1>A modern publishing platform</h1>
				<p>Grow your audience and build your online brand</p>
				<div className="btn">
					<button className="start_for_free">Start for Free</button>
					<button className="learn_more">Learn More</button>
				</div>
			</div>
		</div>
	);
}

export default Intro;