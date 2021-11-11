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
        iitLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
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
        iitLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        messiahLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
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
        valleyForgeLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
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
        christianAcademyLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
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
        christianAcademyLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      calvinLabel.addEventListener("click", () => {
        calvinLabel.classList.toggle("map-hidden")
      })

      const christianAcademy = document.querySelector("#christian-academy")
      const christianAcademyLabel = document.querySelector(
        "#christian-academy-label"
      )
      christianAcademy.addEventListener("click", () => {
        christianAcademyLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          christianAcademyLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      christianAcademyLabel.addEventListener("click", () => {
        christianAcademyLabel.classList.toggle("map-hidden")
      })

      const messiah = document.querySelector("#messiah")
      const messiahLabel = document.querySelector("#messiah-label")
      messiah.addEventListener("click", () => {
        messiahLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          messiahLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
      })
      messiahLabel.addEventListener("click", () => {
        messiahLabel.classList.toggle("map-hidden")
      })

      const valleyForge = document.querySelector("#valley-forge")
      const valleyForgeLabel = document.querySelector("#valley-forge-label")
      valleyForge.addEventListener("click", () => {
        valleyForgeLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          valleyForgeLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
        messiahLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      valleyForgeLabel.addEventListener("click", () => {
        valleyForgeLabel.classList.toggle("map-hidden")
      })

      const liberty = document.querySelector("#liberty")
      const libertyLabel = document.querySelector("#liberty-label")
      liberty.addEventListener("click", () => {
        libertyLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          libertyLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        scrantonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      libertyLabel.addEventListener("click", () => {
        libertyLabel.classList.toggle("map-hidden")
      })

      const scranton = document.querySelector("#scranton")
      const scrantonLabel = document.querySelector("#scranton-label")
      scranton.addEventListener("click", () => {
        scrantonLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          scrantonLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        messiahLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      scrantonLabel.addEventListener("click", () => {
        scrantonLabel.classList.toggle("map-hidden")
      })

      const iit = document.querySelector("#iit")
      const iitLabel = document.querySelector("#iit-label")
      iit.addEventListener("click", () => {
        iitLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          iitLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        secondBaptistLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      iitLabel.addEventListener("click", () => {
        iitLabel.classList.toggle("map-hidden")
      })

      const secondBaptist = document.querySelector("#second-baptist")
      const secondBaptistLabel = document.querySelector("#second-baptist-label")
      secondBaptist.addEventListener("click", () => {
        secondBaptistLabel.classList.toggle("map-hidden")
        setTimeout(() => {
          secondBaptistLabel.classList.add("map-hidden")
        }, 3000)
        easternLabel.classList.add("map-hidden")
        dccLabel.classList.add("map-hidden")
        christianAcademyLabel.classList.add("map-hidden")
        calvinLabel.classList.add("map-hidden")
        messiahLabel.classList.add("map-hidden")
        iitLabel.classList.add("map-hidden")
        libertyLabel.classList.add("map-hidden")
        valleyForgeLabel.classList.add("map-hidden")
        gordonLabel.classList.add("map-hidden")
        wheatonLabel.classList.add("map-hidden")
      })
      secondBaptistLabel.addEventListener("click", () => {
        secondBaptistLabel.classList.toggle("map-hidden")
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
