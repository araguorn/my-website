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
