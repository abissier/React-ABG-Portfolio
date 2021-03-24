import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import projects from './data/projects.json';
import './App.css';
import React from 'react';

function App() {
	return (
		<div>
			<Wrapper>
				<Router>
					<Navbar />
					<Route exact path="/">
						<About />
					</Route>
					<Route path="/projects">
						<h2 className="project-helper">Mouse over each project for more info</h2>
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
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Router>
			</Wrapper>
		</div>
	);
}

export default App;
