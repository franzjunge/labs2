import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

const addConfetti = () => {
    jsConfetti.addConfetti({ emojis: ['⭐','❤️', '🎆'], confettiNumber: 16});
}

export default addConfetti;

