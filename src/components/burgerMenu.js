import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import "./burgerMenu.css"

const BurgerMenu = () => (
	<Menu right>
		<a id="home" className="menu-item" href="/">Home</a>
		<a id="about" className="menu-item" href="/about">About</a>
		<a id="contact" className="menu-item" href="/contact">Contact</a>
		<a id="work" className="menu-item" href="/work">Work</a>
	</Menu>
)

export default BurgerMenu;