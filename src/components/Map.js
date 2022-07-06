import * as React from "react"
import MapSVG from "../../svg/map-pins-labels.svg"

import "./MapStyle.css"

const Map = () => {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {

    setTimeout(() => {

      const schools = [
        {
          name: "dcc",
          label: "dcc-label"
        },
        {
          name: "gordon",
          label: "gordon-label"
        },
        {
          name: "iit",
          label: "iit-label"
        },
        {
          name: "second-baptist",
          label: "second-baptist-label"
        },
        {
          name: "messiah",
          label: "messiah-label"
        },
        {
          name: "liberty",
          label: "liberty-label"
        },
        {
          name: "scranton",
          label: "scranton-label"
        },
        {
          name: "valley-forge",
          label: "valley-forge-label"
        },
        {
          name: "calvin",
          label: "calvin-label"
        },
        {
          name: "christian-academy",
          label: "christian-academy-label"
        },
        {
          name: "eastern",
          label: "eastern-label"
        },
        {
          name: "middle_tennessee_state",
          label: "middle_tennessee_state_label"
        },
        {
          name: "texas_am",
          label: "texas_am_label"
        },
        {
          name: "troy_university",
          label: "troy_university_label"
        },
        {
          name: "wheaton_college",
          label: "wheaton_college_label"
        },
        {
          name: "yale",
          label: "yale_label"
        },
        {
          name: "emory_weiner_school",
          label: "emory_weiner_school_label"
        },
        {
          name: "episcopal_academy",
          label: "episcopal_academy_label"
        }
      ]

      function addSchool(school) {
        let schoolElement = document.querySelector('#' + school.name)
        schoolElement.addEventListener("click", () => {
          let schoolLabelElement = document.querySelector('#' + school.label)
          schoolLabelElement.style.display = 'block'
          setTimeout(() => {
            schoolLabelElement.style.display = 'none'
          }, 3000)
          for (let i = 0; i < schools.length; i++) {
            if (schools[i].label == school.label) {
              schoolLabelElement.addEventListener("click", () => {
                schoolLabelElement.style.display = 'none'
              })
            } else {
              document.querySelector('#' + schools[i].label).style.display = 'none';
            }
          }
        })
      }

      for (let i = 0; i < schools.length; i++) {
        addSchool(schools[i])
      }

      console.log("Map is active")
    }, 500)
  }

  return (
    <span>
      <MapSVG />
    </span>
  )
}

export default Map
