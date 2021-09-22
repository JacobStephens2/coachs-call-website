import * as React from 'react'
import "../styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactText'
import ContactText from './ContactText';


const Contact = () => {
	return (
		<section className="grey-section">
			<ContactText />
		</section>
	)
}

export default Contact;