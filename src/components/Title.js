import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../App.css';

function Title() {
	return (
		<header className="title" id="title">
			<h1>AUDREY BISSIERE GROTE</h1>
			<p>Full-Stack Developer</p>
			<AnchorLink href="#about-me" offset="100">
				<i class="icon-circle-arrow-down" />
			</AnchorLink>
		</header>
	);
}

export default Title;
