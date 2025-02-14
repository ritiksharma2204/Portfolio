function toggleDarkMode() {
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-black');
}

function toggleChatbot() {
    document.getElementById('chatbot').classList.toggle('hidden');
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        let userInput = document.getElementById('userInput').value.trim().toLowerCase();
        document.getElementById('chatbox').innerHTML += `<p class='text-blue-400'>You: ${userInput}</p>`;
        document.getElementById('userInput').value = '';
        botResponse(userInput);
    }
}

function botResponse(input) {
    let responses = {
        'hello': 'Hi there! How can I help?',
        'who are you': 'I am a chatbot for Ritik Sharma\'s portfolio.',
        'contact': 'Reach Ritik at ritik.sh54321@gmail.com.',
        'projects': 'Ritik has worked on Study MBBS Abroad and an Amazon Clone.',
        'bye': 'Goodbye! Have a great day!'
    };
    let response = responses[input] || "I'm not sure. Try asking about 'projects' or 'contact'.";
    document.getElementById('chatbox').innerHTML += `<p class='text-green-400'>Bot: ${response}</p>`;
}

// Typed.js Effect
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed", {
        strings: ["Hi, I'm Ritik Sharma", "A Passionate Developer", "Building Responsive Websites", "A Tech Enthusiast"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});
