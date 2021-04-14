function About() {
	return (
		<div className="abt-card">
			<div className="abt-details">
				<div className="details-front">
					<h1>About me</h1>
					<p>
						Web Developer with a background in Customer Service. Recognized as proactive, resourceful, and
						persistent problem-solver. Excellent communicator with effective client relationship building
						skills. Graduate of Full Stack Web Development through UNC Charlotte.
					</p>
					<p>Check out my projects!</p>
				</div>
				<img
					src="https://i.ibb.co/58RTN1V/arrow-removebg-preview.png"
					alt="arrow-removebg-preview"
					id="arrow-img"
				/>
			</div>
			<div className="img-section">
				<img src="https://i.ibb.co/kJbK3Wp/me.png" alt="me" id="my-pic" />
			</div>
		</div>
	);
}

export default About;
