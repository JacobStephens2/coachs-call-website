import * as React from 'react'
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const LetsConnect = () => {
	return (
		<section>
			<Container>
				<h2>Let's Connect</h2>
				<h3>Learn more about Coach’s Call</h3>
				<p>“As iron sharpens iron, so one person sharpens another.”  <cite>Proverbs 27:1</cite></p>
				<Link to="/contact"><Button>CONTACT JOHN</Button></Link>
			</Container>
		</section>
	)
}

export default LetsConnect