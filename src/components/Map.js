import * as React from "react"
import MapSVG from "../../svg/map-pins-labels.svg"

import "./MapStyle.css"

const Map = () => {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    setTimeout(() => {
      console.log("Map is active")
      const wheaton = document.querySelector("#wheaton")
      const wheatonLabel = document.querySelector("#wheaton-label")
      wheaton.addEventListener("click", () => {
        wheatonLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          wheatonLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
      })
      wheatonLabel.addEventListener("click", () => {
        wheatonLabel.classList.toggle("map-hidden")
      })

      const eastern = document.querySelector("#eastern")
      const easternLabel = document.querySelector("#eastern-label")
      eastern.addEventListener("click", () => {
        easternLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          easternLabel.classList.add("map-hidden")
        }, 3000)
        wheatonLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
      })
      easternLabel.addEventListener("click", () => {
        easternLabel.classList.toggle("map-hidden")
      })

      const dcc = document.querySelector("#dcc")
      const dccLabel = document.querySelector("#dcc-label")
      dcc.addEventListener("click", () => {
        dccLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          dccLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
      })
      dccLabel.addEventListener("click", () => {
        dccLabel.classList.toggle("map-hidden")
      })

      const gordon = document.querySelector("#gordon")
      const gordonLabel = document.querySelector("#gordon-label")
      gordon.addEventListener("click", () => {
        gordonLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          gordonLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
      })
      gordonLabel.addEventListener("click", () => {
        gordonLabel.classList.toggle("map-hidden")
      })

      const calvin = document.querySelector("#calvin")
      const calvinLabel = document.querySelector("#calvin-label")
      calvin.addEventListener("click", () => {
        calvinLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          calvinLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      calvinLabel.addEventListener("click", () => {
        calvinLabel.classList.toggle("map-hidden")
      })

      // function to remove labels when the map is clicked
    }, 2000)
  }

  return (
    <span>
      <MapSVG />
    </span>
  )
}

export default Map
