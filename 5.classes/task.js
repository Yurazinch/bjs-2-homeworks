class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    } 

    fix() {
        state = state * 1,5;
    }

    set state(state) {        
        if (state > 100) {
            this._state = 100;
        } 
        if (state < 0) {
            this._state = 0;
        }        
        this._state = state;   
        }
          
    get state() {
      return this._state;
    }       
}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    type = "book";
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}