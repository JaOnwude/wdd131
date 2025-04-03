let reviewCounter = localStorage.getItem("reviewCounter") || 0;


document.getElementById('review-counter').textContent `Reviews completed: ${reviewCounter}`;

document.querySelector("#review-form").addEventListener('submit', () => {
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter);
})

document.getElementById('review-counter').innerText = `Reviews completed: ${reviewCounter}`;
