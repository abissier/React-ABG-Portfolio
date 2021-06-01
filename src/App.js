import React, { useEffect } from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import projects from './data/projects.json';
import ReactGA from 'react-ga';
import AppConfig from './App.config';
import './App.css';

function App() {
	useEffect(() => {
		ReactGA.initialize(AppConfig.GA_TRACKING_CODE);
		ReactGA.pageview(window.location.pathname);
	});

	return (
		<div>
			<Navbar />
			<Title />
			<About />
			<div id="projects">
				<h1>- PROJECTS -</h1>
				<div className="projectWrapper">
					{projects.map((project, index) => (
						<Project
							key={index}
							id={project.id}
							title={project.title}
							code={project.code}
							deployedCode={project.deployedCode}
							description={project.description}
							tools={project.tools}
							imageSrc={project.imageSrc}
						/>
					))}
				</div>
			</div>
			<Contact />{' '}
		</div>
	);
}

export default App;
