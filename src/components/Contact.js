import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Contact() {
	return (
		<footer id="contact">
			<h1>- CONTACT -</h1>
			<ul className="contact-list">
				<li>
					<a
						href="https://www.linkedin.com/in/audrey-bissiere-grote-a0728a83"
						target="_blank"
						rel="noreferrer"
					>
						<i className="icon-linkedin icon-2x" />
					</a>
				</li>
				<li>
					<a href="https://github.com/abissier" target="_blank" rel="noreferrer">
						<i className="icon-github icon-2x" />
					</a>
				</li>
				<li>
					<a href="mailto:abissieregrote@gmail.com">
						<i className="fas fa-envelope icon-2x" />
					</a>
				</li>
			</ul>
			<AnchorLink offset="100" href="#title" className="avatar">
				<img
					src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"
					alt="avatar"
					height="300px"
					width="300px"
				/>
			</AnchorLink>
		</footer>
	);
}

export default Contact;
