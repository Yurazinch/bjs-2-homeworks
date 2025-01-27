class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    } 

    fix() {
        this.state = this._state * 1.5;
    }

    set state(value) { 
        if (value > 0 && value < 100) {                   
        this._state = value;   
        }          
        if (value >= 100) {
            this._state = 100;
        } 
        if (value <= 0) {
            this._state = 0;
        }        
        }
          
    get state() {
      return this._state;
    }       
}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
    }
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