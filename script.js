document.addEventListener('DOMContentLoaded', function () {
  const pulsingHeading = document.getElementById('pulse');

  function pulseAnimation() {
    let fontSize = 32;
    setInterval(() => {
      fontSize = fontSize === 32 ? 35 : 32;
      pulsingHeading.style.fontSize = `${fontSize}px`;
    }, 1000); 
    
  }

  // Start the animation
  pulseAnimation();
});