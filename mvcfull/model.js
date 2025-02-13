export default class Model {
    constructor() {
        this.story = "Det var en gang en __ som gikk tur i __.";
        this.words = ["prins", "prinsesse", "hund", "katt", "mørk", "lys", "skogen", "vakker"];
    }

    getStory() {
        return this.story;
    }

    getWords() {
        return this.words;
    }

    fillBlank(word) {
        this.story = this.story.replace("__", word);
    }
}