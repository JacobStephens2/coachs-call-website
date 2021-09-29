import * as React from "react"

const isBrowser = typeof window !== "undefined"

const Test = () => {
  if (isBrowser) {
    const myButton = document.querySelector(".target-button")

    myButton.addEventListener("click", () => {
      myButton.classList.toggle("dark-button")
    })
  }

  return <button className="target-button">Toggle dark button</button>
}

export default Test
