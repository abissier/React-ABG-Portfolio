import resume from '../img/ABG-Resume.pdf';

function About() {
	return (
		<section className="abt-card" id="about-me">
			<h1>- ABOUT ME -</h1>
			<p>
				Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and
				persistent problem-solver. Excellent communicator with effective client relationship building skills.
				Graduate of Full Stack Web Development through UNC Charlotte.
			</p>
			<p>
				<strong>TOP SKILLS: </strong>HTML, CSS, Javascript, React
			</p>
			<p>
				<strong>EXPERIENCE WITH: </strong>Nodejs, MongoDB, MySQL, jQuery
			</p>
			<button>
				<a href={resume} target="_blank" rel="noreferrer">
					Download Resume
				</a>
			</button>
		</section>
	);
}

export default About;
