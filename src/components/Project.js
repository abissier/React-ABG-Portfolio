import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Project({ id, title, code, deployedCode, description, tools, imageSrc }) {
	return (
		<div>
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img className="card-img-top" src={imageSrc} alt={title} />
					</div>
					<div className="flip-card-back">
						<div className="projectCard" key={id}>
							<h1>{title}</h1>
							<p>{description}</p>
							<p>{tools}</p>
							<div className="code-links">
								<div className="column">
									<Button variant="light">
										{' '}
										<a href={code} rel="noreferrer" target="_blank">
											Github Repo
										</a>
									</Button>
								</div>
								{deployedCode && (
									<div className="column">
										<Button variant="light">
											<a href={deployedCode} rel="noreferrer" target="_blank">
												Deployed Application
											</a>
										</Button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
