export default class View {
    constructor() {
        this.storyElement = document.getElementById("story");
        this.wordsElement = document.getElementById("words");
    }

    renderStory(story) {
        this.storyElement.innerHTML = story;
    }

    renderWords(words, onClick) {
        this.wordsElement.innerHTML = "";
        words.forEach((word) => {
            const wordElement = document.createElement("button");
            wordElement.innerText = word;
            wordElement.addEventListener("click", () => onClick(word));
            this.wordsElement.appendChild(wordElement);                    //(child node/parent node)
        })
    }
}