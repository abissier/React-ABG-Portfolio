import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
				<Router>
					<Navbar />
					<Route exact path={[ '/', '/React-ABG-Portfolio' ]}>
						<About />
						<Footer />
					</Route>
					<Route path="/projects">
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
						<Footer />
					</Route>
					<Route path="/contact">
						<Contact />
						<Footer />
					</Route>
				</Router>
			</Wrapper>
		</div>
	);
}

export default App;
