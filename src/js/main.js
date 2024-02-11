// Import our custom CSS
// import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// BS color picker
import './bs-color-picker.js'

// Sticky header event detection
const el = document.querySelector("#appHeader")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);