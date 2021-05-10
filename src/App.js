import React from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import projects from './data/projects.json';
import ReactGA from 'react-ga';
import AppConfig from './App.config';
import './App.css';

function initializeAnalytics() {
	ReactGA.initialize(AppConfig.GA_TRACKING_CODE);
	ReactGA.pageview('/');
}

function App() {
	initializeAnalytics();
	return (
		<div>
			<Wrapper>
				<Navbar />
				<div id="about-me">
					<About />
				</div>
				<div id="projects">
					<h1>Projects</h1>
					<div className="projectWrapper">
						{projects.map((project) => (
							<Project
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
				<div id="contact">
					<Contact />
				</div>
				<Footer />
			</Wrapper>
		</div>
	);
}

export default App;
