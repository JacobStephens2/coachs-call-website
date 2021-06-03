/**
 * Creates hierarchical menu based on WordPress menu.
 * @link https://www.wpgraphql.com/docs/menus/#hierarchical-data
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "../utils/UniversalLink"
import { FlatListToHierarchical } from "../utils/FlatListToHierarchical"
import { push as Menu } from 'react-burger-menu'

import * as style from "./mainNav.module.css"
import "./burgerMenu.css"

const MenuLoop = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((menuItem, index) => {
        return (
          <li
            key={index}
            className={menuItem.routes.length > 0 ? "has-submenu" : undefined}
          >
            <UniversalLink to={menuItem.path} activeClassName="current-page">
              {menuItem.title}
            </UniversalLink>
            {menuItem.routes.length > 0 && (
              <MenuLoop menuItems={menuItem.routes}></MenuLoop>
            )}
          </li>
        )
      })}
    </ul>
  )
}

const MainNav = () => {
  const wpMenu = useStaticQuery(graphql`
    {
      allWpMenuItem(
        sort: { fields: order, order: ASC }
        filter: {
          menu: { node: { slug: { eq: "header" } } }
        }
      ) {
        nodes {
          id
          title: label
          path
          target
          parent: parentId
        }
      }
    }
  `)

  const headerMenu = FlatListToHierarchical(wpMenu.allWpMenuItem.nodes, {
    idKey: "id",
    childrenKey: "routes",
    parentKey: "parent",
  })

  return (
    <nav className={style.mainnav}>
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right >
      {headerMenu.length > 0 && <MenuLoop menuItems={headerMenu}></MenuLoop>}
      </Menu>
    </nav>
  )
}

export default MainNav
