export default class View {
    constructor() {
        this.appElement = document.getElementById("app");
        this.renderApp();
        this.storyElement = document.getElementById("story");
        this.wordsElement = document.getElementById("words");
    }

    renderApp() {
        this.appElement.innerHTML = `
            <div id="story"></div>
            <div id="words"></div>
            `;
    }

    renderStory(story) {
        this.storyElement.innerText = story;
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