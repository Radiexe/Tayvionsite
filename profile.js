const nameElement = document.querySelector('.typing-animation');
const nameText = "Tayvion Settles"; // Replace with your name
let index = 0;

// Clear the text content before starting the animation
nameElement.textContent = "";

function typeName() {
  if (index < nameText.length) {
    nameElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 150); // Adjust typing speed here
  }
}

// Start the typing animation
typeName();