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

class Library {
    constructor (name, books) {
        this.name = name;
        this.books = []; 
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {              
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].type != null && (this.books[i].type === type || this.books[i].value === value)) {
              return this.books[i];
            }
            return null;
        }
    }

    giveBookByName(bookName) {        
        for (let i = 0; i < this.books.length; i++) {        
            if (this.books[i].name != undefined && this.books[i].name === bookName) {
              this.books.splice(i, 1);
            }
            
        }
    }
}