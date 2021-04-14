import React from 'react';
import resume from '../img/ABG-Resume.pdf';

function Contact() {
	return (
		<div>
			<div className="contact-page">
				<div className="contact-info">
					<h1 id="contact-msg">Let's get in touch</h1>
					<div className="contact-card">
						<a
							href="https://www.linkedin.com/in/audrey-bissiere-grote-a0728a83"
							target="_blank"
							rel="noreferrer"
						>
							<img src="https://img.icons8.com/metro/52/000000/linkedin.png" alt="linkedin icon" />
						</a>
						<div className="contact-description">LinkedIn /audrey-bissiere-grote</div>
					</div>
					<div className="contact-card">
						<a href="mailto:abissieregrote@gmail.com">
							<img src="https://img.icons8.com/metro/52/000000/email.png" alt="email icon" />{' '}
						</a>
						<div className="contact-description">abissieregrote@gmail.com</div>
					</div>
					<div className="contact-card">
						<a href="https://github.com/abissier" target="_blank" rel="noreferrer">
							<img src="https://img.icons8.com/material-sharp/96/000000/github.png" alt="github icon" />
						</a>
						<div className="contact-description">Github /abissier</div>
					</div>

					<div className="contact-card">
						<a href={resume} target="_blank" rel="noreferrer">
							<img
								src="https://img.icons8.com/material/96/000000/open-resume--v1.png"
								alt="resume icon"
							/>
						</a>
						<div className="contact-description">Resume</div>
					</div>
					<div className="contact-card">
						<img src="https://img.icons8.com/android/48/000000/phone.png" alt="phone icon" />(704) 618 -
						2785
					</div>
				</div>
				<div className="contact-map">
					<img src="https://i.ibb.co/KNCj7Sq/asset-upload-file38385-32577.jpg" alt="charlotte, nc" />
				</div>
			</div>
		</div>
	);
}

export default Contact;
