function showMood(mood) {
    const message = document.getElementById("moodMessage");
    const cards = document.querySelectorAll(".blog-card");

    const messages = {
        calm: "Here are some stories to help you slow down. 🌿",
        happy: "Let's celebrate the little things in life! ☀️",
        sad: "Take your time. Here is a gentle story for you. 💚",
        motivated: "Ready for a fresh start? Let's get inspired! ✨"
    };

    message.textContent = messages[mood];

    cards.forEach(function(card) {
        if (card.dataset.mood === mood) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.getElementById("search").addEventListener("input", function() {
    const searchText = this.value.toLowerCase();
    const cards = document.querySelectorAll(".blog-card");

    cards.forEach(function(card) {
        const text = card.textContent.toLowerCase();

        if (text.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

document.getElementById("darkBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.textContent = "☀️";
    } else {
        this.textContent = "🌙";
    }
});

function readBlog(id) {
    const stories = {
        1: "The Art of Slowing Down\n\nSometimes we spend so much time trying to do everything that we forget to enjoy the present. Take a small break, breathe, and allow yourself to slow down.",
        2: "Finding Joy in Little Things\n\nHappiness does not always come from big achievements. It can be found in a cup of tea, a kind message, a favorite song, or a beautiful morning.",
        3: "Start Before You Feel Ready\n\nYou don't have to know everything before you begin. Start with one small step, learn from your mistakes, and keep improving.",
        4: "Every Season Will Pass\n\nLife has difficult days and better days. Give yourself patience and remember that you can take things one day at a time."
    };

    alert(stories[id]);
}

