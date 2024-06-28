// Import our custom CSS
import "../scss/styles.scss"

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap"

// BS color picker
import "./bs-color-picker.js"

// BS Lightbox
// import Lightbox from "bs5-lightbox"

// const options = {
//   keyboard: true,
//   size: "xl",
// }

// document.querySelectorAll(".lightbox-toggle").forEach((el) =>
//   el.addEventListener("click", (e) => {
//     e.preventDefault()
//     const lightbox = new Lightbox(el, options)
//     lightbox.show()
//   })
// )

// Sticky header event detection
const el = document.querySelector("#appHeader")
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
)

observer.observe(el)
