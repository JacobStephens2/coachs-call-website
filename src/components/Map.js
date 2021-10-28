import * as React from "react"
import MapSVG from "../../svg/map-pins-labels.svg"

const Map = () => {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    setTimeout(() => {
      console.log("The map is now interactive")
      const wheaton = document.querySelector("#wheaton")
      const wheatonLabel = document.querySelector("#wheaton-label")
      wheaton.addEventListener("click", () => {
        wheatonLabel.classList.toggle("map-hidden")
      })
      wheatonLabel.addEventListener("click", () => {
        wheatonLabel.classList.toggle("map-hidden")
      })

      const eastern = document.querySelector("#eastern")
      const easternLabel = document.querySelector("#eastern-label")
      eastern.addEventListener("click", () => {
        easternLabel.classList.toggle("map-hidden")
      })
      easternLabel.addEventListener("click", () => {
        easternLabel.classList.toggle("map-hidden")
      })

      const dcc = document.querySelector("#dcc")
      const dccLabel = document.querySelector("#dcc-label")
      dcc.addEventListener("click", () => {
        dccLabel.classList.toggle("map-hidden")
      })
      dccLabel.addEventListener("click", () => {
        dccLabel.classList.toggle("map-hidden")
      })

      const gordon = document.querySelector("#gordon")
      const gordonLabel = document.querySelector("#gordon-label")
      gordon.addEventListener("click", () => {
        gordonLabel.classList.toggle("map-hidden")
      })
      gordonLabel.addEventListener("click", () => {
        gordonLabel.classList.toggle("map-hidden")
      })

      const baylor = document.querySelector("#baylor")
      const baylorLabel = document.querySelector("#baylor-label")
      baylor.addEventListener("click", () => {
        baylorLabel.classList.toggle("map-hidden")
      })
      baylorLabel.addEventListener("click", () => {
        baylorLabel.classList.toggle("map-hidden")
      })

      const calvin = document.querySelector("#calvin")
      const calvinLabel = document.querySelector("#calvin-label")
      calvin.addEventListener("click", () => {
        calvinLabel.classList.toggle("map-hidden")
      })
      calvinLabel.addEventListener("click", () => {
        calvinLabel.classList.toggle("map-hidden")
      })
    }, 3000)
  }

  return (
    <span>
      <MapSVG />
    </span>
  )
}

export default Map
