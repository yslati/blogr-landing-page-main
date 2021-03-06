import Svg from '../assets/illustration-editor-desktop.svg'


const Designed = () => {
	return (
		<div fluid className="designed">
			<h2>Designed for the future</h2>
			<div className="designed--info flex md:flex-row">
				<div className="designed--info_1">
					<h3 className="designed--info__title">Introducing an extensible editor</h3>
					<p className="designed--info__des">
						Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
						The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
						videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
						change the looks of a blog.
						</p>
					<h3 className="designed--info__title">Robust content management</h3>
					<p className="designed--info__des">
						Flexible content management enables users to easily move through posts. Increase the usability of your blog
						by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
						</p>
				</div>
				<div className="designed--info_2">
					<img src={Svg} alt="icon" className="illustration-editor-desktop" />
				</div>
			</div>
		</div>
	);
}

export default Designed;