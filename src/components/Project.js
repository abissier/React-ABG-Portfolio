import React from 'react';
import '../App.css';

function Project({ id, title, code, deployedCode, description, tools }) {
	return (
		<div className="container" key={id}>
			<div className="text">
				<div className="project-info">
					<h2> {title} </h2>
					<p>{description}</p>
					<ul>{tools.map((tool, index) => <li key={index}>{tool}</li>)}</ul>
				</div>
				<div className="project-btns">
					<button>
						{' '}
						<a href={code} rel="noreferrer" target="_blank">
							Github Repo
						</a>
					</button>
					<button>
						<a href={deployedCode} rel="noreferrer" target="_blank">
							Deployed Application
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Project;
