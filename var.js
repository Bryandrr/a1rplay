const texts = [
    "gaming",
    "unblocking",
    "arcading",
    "fun",
    "entertainment"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typewriterText = document.getElementById('typewriter-text');
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenTexts = 2000;

function type() {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
        typewriterText.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typewriterText.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => isDeleting = true, delayBetweenTexts);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});
