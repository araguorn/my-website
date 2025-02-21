document.addEventListener("DOMContentLoaded", function () {
    const emojiSelect = document.getElementById("emoji-select");
    const stampBtn = document.getElementById("stamp-emoji");
    const relocateBtn = document.getElementById("relocate-emojis");
    const clearBtn = document.getElementById("clear-emojis");
    const emojiContainer = document.getElementById("emoji-container");

    function getRandomPosition() {
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 150);
        return { x, y };
    }

    function stampEmoji() {
        const emoji = document.createElement("span");
        emoji.classList.add("emoji");
        emoji.textContent = emojiSelect.value;

        const position = getRandomPosition();
        emoji.style.left = `${position.x}px`;
        emoji.style.top = `${position.y}px`;

        emojiContainer.appendChild(emoji);
    }

    function relocateEmojis() {
        const emojis = document.querySelectorAll(".emoji");
        emojis.forEach((emoji) => {
            const newPosition = getRandomPosition();
            emoji.style.left = `${newPosition.x}px`;
            emoji.style.top = `${newPosition.y}px`;
        });
    }

    function clearEmojis() {
        emojiContainer.innerHTML = "";
    }

    stampBtn.addEventListener("click", stampEmoji);
    relocateBtn.addEventListener("click", relocateEmojis);
    clearBtn.addEventListener("click", clearEmojis);
});

// Fetch a random Wikipedia fact
async function getRandomFact() {
    try {
        let response = await fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary");
        let data = await response.json();

        let fact = data.extract;
        
        // Ensure facts are within 1000 characters
        if (fact.length > 1000) {
            fact = fact.substring(0, 997) + "...";
        }

        document.getElementById("fact-container").innerHTML = fact;
    } catch (error) {
        document.getElementById("fact-container").innerHTML = "Failed to load a fact. Try again!";
        console.error("Error fetching fact:", error);
    }
}

// Load a fact on page load
window.onload = getRandomFact;

// Reload fact on button click
document.getElementById("load-facts").addEventListener("click", getRandomFact);
