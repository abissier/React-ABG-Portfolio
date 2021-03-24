import React from 'react';
import '../App.css';

function Project({ id, title, code, deployedCode, description, tools, imageSrc }) {
	return (
		<div>
			<div className="projectWrapper">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img className="card-img-top" src={imageSrc} alt="" />
						</div>
						<div className="flip-card-back">
							<div className="projectCard" key={id}>
								<h1>{title}</h1>
								<p>{description}</p>
								<p>{tools}</p>
								<div className="code-links">
									<div className="column">
										Project Repo
										<a href={code} rel="noreferrer" target="_blank">
											<img
												src="https://img.icons8.com/pastel-glyph/64/000000/code--v2.png"
												alt="code link"
												height="40px"
											/>
										</a>
									</div>
									{deployedCode && (
										<div className="column">
											Deployed Application
											<a href={deployedCode} rel="noreferrer" target="_blank">
												<img
													src="https://img.icons8.com/metro/26/000000/start.png"
													alt="deployed app link"
													height="45px"
												/>
											</a>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
