import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../App.css';

function Navbar() {
	return (
		<header>
			<div className="name-section">
				<div className="name">
					<h1>Audrey Bissiere-Grote</h1>
					<h2>Fullstack Web Developer</h2>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<AnchorLink href="#about-me" className="link-nav">
							About Me
						</AnchorLink>
					</li>
					<li>
						<AnchorLink href="#projects" className="link-nav">
							Projects
						</AnchorLink>
					</li>
					<li>
						<AnchorLink href="#contact" className="link-nav">
							Contact
						</AnchorLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
