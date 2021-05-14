import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../App.css';

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<AnchorLink offset="100" href="#about-me" className="link-nav">
						About Me
					</AnchorLink>
				</li>
				<li>
					<AnchorLink offset="100" href="#projects" className="link-nav">
						Projects
					</AnchorLink>
				</li>
				<li>
					<AnchorLink offset="100" href="#contact" className="link-nav">
						Contact
					</AnchorLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
