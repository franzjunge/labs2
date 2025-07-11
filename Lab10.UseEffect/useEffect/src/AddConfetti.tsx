import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

const addConfetti = ({text}: {text: string}) => {
    jsConfetti.addConfetti({
        emojis: [text],
        confettiNumber: 12,
        emojiSize: 50
    });
}

export default addConfetti;