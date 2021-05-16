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
						<i class="icon-linkedin icon-2x" />
					</a>
				</li>
				<li>
					<a href="https://github.com/abissier" target="_blank" rel="noreferrer">
						<i class="icon-github icon-2x" />
					</a>
				</li>
				<li>
					<a href="mailto:abissieregrote@gmail.com">
						<i class="fas fa-envelope icon-2x" />
					</a>
				</li>
			</ul>
			<AnchorLink offset="100" href="#title" className="avatar">
				<img
					src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"
					alt="avatar"
				/>
			</AnchorLink>
		</footer>
	);
}

export default Contact;
