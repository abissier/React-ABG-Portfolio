import React from 'react';
import '../App.css';

function Project({ id, title, code, deployedCode, description, tools }) {
	return (
		<div className="projectCard" id={id}>
			<h1>{title}</h1>
			<p>{description}</p>
			<p>{tools}</p>
			<div className="code-links">
				<a href={code} rel="noreferrer" target="_blank">
					Github
				</a>
				<a href={deployedCode} rel="noreferrer" target="_blank">
					Deployed App
				</a>
			</div>
		</div>
	);
}

export default Project;
