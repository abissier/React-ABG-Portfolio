import React from 'react';
import '../App.css';

function Project({ id, title, code, deployedCode, description, tools, imageSrc }) {
	return (
		<div className="container" key={id}>
			<img className="image" src={imageSrc} alt={title} />
			<div className="overlay">
				<div className="text">
					<div className="project-info">
						<p>{description}</p>
						<ul>{tools.map((tool) => <li>{tool}</li>)}</ul>
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
		</div>
	);
}

export default Project;
