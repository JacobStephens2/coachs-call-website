import * as React from 'react'
import Container from 'react-bootstrap/Container';

const ContactText = () => {
	return (
		<Container>
		<h4>CONTACT</h4>
		<p>
			<a href="tel:484.574.1444">
			<i class="far fa-envelope"></i>
			&ensp;
			484.574.1444</a>
		</p>
		<p>
			<a href="mailto:john@coachscall.org">
			<i class="fas fa-phone-alt"></i>
			&ensp;
			john@coachscall.org</a>
		</p>
	</Container>

	)
}

export default ContactText