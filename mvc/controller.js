import Model from './model.js';
import View from './view.js';

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.renderStory(this.model.getStory());
        this.view.renderWords(this.model.getWords(), this.handleWordClick.bind(this));
    }

    handleWordClick(word) {
        this.model.fillBlank(word);
        this.view.renderStory(this.model.getStory());
    }
}

document.addEventListener("DOMContentLoaded", () => {    //fully loaded HTML, DOM tree built, external resources like pictures, stylesheets may not be loaded yet
    const app = new Controller(new Model(), new View());
});