// script.js

// Typing animation
const typedText = document.querySelector(".typed-text");
const words = ["S Sudhandra", "a Web Learner", "an Aspiring Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayed = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typedText.textContent = displayed;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Form submit alert
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  form.reset();
});
