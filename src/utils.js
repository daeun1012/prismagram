import { adjectives, nonces } from "./word";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nonces[randomNumber]}`;
};