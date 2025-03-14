document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
});

let currentIndex = 0;
const cards = document.querySelectorAll(".testimonial-card");

function showNextCard() {
  cards[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].classList.add("active");
}

// Initialise the first card as active
cards[currentIndex].classList.add("active");

// Automatically switch card every 5 seconds
setInterval(showNextCard, 5000);

// JavaScript (place in a <script> tag or external JS file)
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      // Show button after scrolling 300px
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Smooth scroll to top when clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
