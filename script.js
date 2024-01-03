const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', (event) => {
    const buttonRect = noButton.getBoundingClientRect();
    
    // Increase the distance by multiplying offsetX and offsetY with a scaling factor (e.g., 2)
    const scalingFactor = 10;
    const offsetX = (event.clientX - (buttonRect.left + buttonRect.width / 2)) * scalingFactor;
    const offsetY = (event.clientY - (buttonRect.top + buttonRect.height / 2)) * scalingFactor;

    noButton.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
});

// Original JavaScript file (script.js)
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', () => {
    // Redirect to the "thankyou.html" page when the "Yes" button is clicked
    window.location.href = 'thankyou.html';
});
