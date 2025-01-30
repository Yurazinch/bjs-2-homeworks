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
            if (this.books[i].hasOwnProperty(type) && this.books[i][type] === value) {
              return this.books[i];
            }            
        }
        return null;
    }

    giveBookByName(bookName) {
        let removedBook;                
        for (let i = 0; i < this.books.length; i++) {        
            if (this.books[i].name === bookName) {                               
                removedBook = this.books[i];
                this.books.splice(i, 1);
                return removedBook;
            }                       
        }
        return null;
    }
}

class Student {
    constructor (name) {
     this.name = name;
     this.marks = {};
    }

    addMark (mark, subjectName) {              
        if (mark < 2 || mark > 5) {
            return;
        }
        if (this.marks[subjectName] != undefined || this.marks[subjectName] != null) {
            this.marks[subjectName].push(mark);
            }
        if (this.marks[subjectName] === undefined || this.marks[subjectName] === null) {
            this.marks[subjectName] = [];                    
            this.marks[subjectName].push(mark);
        }          
    }

    getAverageBySubject(subjectName) {
        if (this.marks[subjectName] === undefined || this.marks[subjectName] === null) {
            return 0;
        }
        return this.marks[subjectName].reduce((summ, mark) => summ + mark, 0) / this.marks[subjectName].length;
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        if (subjects.length < 1) {
            return 0;
        }
        // первый вариант
        /*let summ = 0;
        for (let i = 0; i < subjects.length; i++) {
            summ += this.getAverageBySubject(subjects[i]);
        }
        return summ / subjects.length;*/

        // второй вариант
        return subjects.reduce((summ, subject) => summ + this.getAverageBySubject(subject), 0) / subjects.length;
    }
}