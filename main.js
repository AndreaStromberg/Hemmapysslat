// hämta in de variabler som behövs
const darkModeButton = document.querySelector(".dark-light-button")

const body = document.querySelector("body")

// Funktion för att toggla darkmode
const toggleDarkmode = () => {
  body.classList.toggle("body-darkmode")

  let buttonText = darkModeButton.innerText
  if (buttonText === "Mörkt") {
    buttonText = "Ljust"
  } else {
    buttonText = "Mörkt"
  }

  darkModeButton.innerText = buttonText
}

// Eventlyssnare för knappen
darkModeButton.addEventListener("click", toggleDarkmode)
