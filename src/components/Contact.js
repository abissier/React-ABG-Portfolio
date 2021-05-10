import React from 'react';
import resume from '../img/ABG-Resume.pdf';

function Contact() {
	return (
		<div>
			<h1>Let's get in touch</h1>
			<div className="contact-page">
				<ul className="contact-list">
					<li>
						<a
							href="https://www.linkedin.com/in/audrey-bissiere-grote-a0728a83"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://github.com/abissier" target="_blank" rel="noreferrer">
							GitHub{' '}
						</a>
					</li>
					<li>
						<a href={resume} target="_blank" rel="noreferrer">
							Resume
						</a>
					</li>
					<li>
						<a href="mailto:abissieregrote@gmail.com"> Email </a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Contact;
