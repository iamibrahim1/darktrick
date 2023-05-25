const contactCard = document.querySelector('.contact-card');

// Set initial position
let currentPosition = 0;

// Animation loop
function animateCard() {
  // Calculate new position
  const newPosition = Math.sin(currentPosition) * 10;

  // Apply transform
  contactCard.style.transform = `translateY(${newPosition}px)`;

  // Update position
  currentPosition += 0.03;

  // Repeat animation
  requestAnimationFrame(animateCard);
}

// Start animation
animateCard();
