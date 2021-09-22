 /**
 * Creates hierarchical menu based on WordPress menu.
 * @link https://www.wpgraphql.com/docs/menus/#hierarchical-data
 */
import React from "react"
import { slide as Menu } from 'react-burger-menu'
import * as style from "./mainNav.module.css"
import "./burgerMenu.css"
import { Link } from "gatsby"

const MainNav = () => {      

  return (
    <nav className={style.mainnav}>
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right >
        <ul>

          <li><Link to='/about'>About</Link></li>
            <ul>
              <li><Link to='/about#john-levis'>
                <i class="fas fa-angle-right"></i>&ensp;John Levis</Link>
              </li>
              <li><Link to='/about#mission-vision'>
                <i class="fas fa-angle-right"></i>&ensp;Mission&ensp;|&ensp;Vision</Link>
              </li>
              <li><Link to='/about#development-council'>
                <i class="fas fa-angle-right"></i>&ensp;Development Council</Link>
              </li>
            </ul>            

          <li><Link to='/work'>Work</Link></li>
            <ul>
              <li>
                <Link to='/work#seminars-and-workshops'>
                <i class="fas fa-angle-right"></i>&ensp;
                Professional development seminars and&nbsp;workshops
                </Link>
              </li>
              <li>
                <Link to='/work#mentoring'>
                <i class="fas fa-angle-right"></i>&ensp;
                One on one mentoring&nbsp;and small group&nbsp;sessions
                </Link>
              </li>
            </ul>   
          
          <li><Link to='/contact'>Contact</Link></li>
            <ul>
              <li><Link to='/contact#email'>
                <i class="fas fa-angle-right"></i>&ensp;Email</Link>
              </li>
              <li><Link to='/contact#donate'>
                <i class="fas fa-angle-right"></i>&ensp;Donate</Link>
              </li>
            </ul>   

        </ul>
      </Menu>
    </nav>
  )
}

export default MainNav
