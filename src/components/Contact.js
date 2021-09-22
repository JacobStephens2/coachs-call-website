import * as React from 'react'
import Container from 'react-bootstrap/Container';
import "../styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
	return (
		<section className="grey-section">
			<Container>
					<h4>CONTACT</h4>
					<p>
						<i class="far fa-envelope"></i>
						&ensp;
						<a href="tel:484.574.1444">484.574.1444</a>
					</p>
					<p>
						<i class="fas fa-phone-alt"></i>
						&ensp;
						<a href="mailto:john@coachscall.org">john@coachscall.org</a>
					</p>
			</Container>
		</section>
	)
}

export default Contact;