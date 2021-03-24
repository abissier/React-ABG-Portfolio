import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
	return (
		<div className="navbar">
			<div className="name">
				<h1>Audrey Bissiere-Grote</h1>
				<h2>Fullstack Web Developer</h2>
			</div>
			<div className="bar">
				<ul>
					<li>
						<Link to="/" className="link-nav">
							About Me
						</Link>
					</li>
					<li>
						<Link to="/projects" className="link-nav">
							Projects
						</Link>
					</li>
					<li>
						<Link to="contact" className="link-nav">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
