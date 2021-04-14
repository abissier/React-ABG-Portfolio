import resume from '../img/ABG-Resume.pdf';

function Footer() {
	return (
		<div className="footer">
			<a href="https://github.com/abissier" target="_blank" rel="noreferrer">
				<img src="https://img.icons8.com/material-sharp/24/000000/github.png" alt="github" />
			</a>
			<a href="mailto:abissieregrote@gmail.com">
				<img src="https://img.icons8.com/fluent-systems-filled/24/000000/email-sign.png" alt="email" />
			</a>
			<a href={resume} target="_blank" rel="noreferrer">
				<img src="https://img.icons8.com/material/24/000000/set-as-resume--v1.png" alt="resume" />
			</a>
		</div>
	);
}

export default Footer;
