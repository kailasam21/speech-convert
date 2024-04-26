
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const textarea = document.querySelector('textarea');
    const startBtn = document.getElementById('start-btn');
    const instructions = document.getElementById('instructions');

   
    recognition.continuous = true;
    recognition.interimResults = true;

   
    recognition.onstart = function() {
        instructions.textContent = 'Listening...';
    };


    recognition.onend = function() {
        instructions.textContent = 'Press the start button';
    };

    
    recognition.onresult = function(event) {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');

        textarea.value = transcript;
    };


    startBtn.addEventListener('click', function() {
        recognition.start();
    });
} else {
    instructions.textContent = 'Speech recognition not supported in your browser.';
}


