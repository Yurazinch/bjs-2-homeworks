function parseCount(value) { 
    let x = Number.parseFloat(value);
    if(Number.isNaN(x)) {
        throw new Error('Невалидное значение');
    }
    return x;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (error) {
        return error;
    }    
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter () {        
        try {
            return this.perimeter = this.a + this.b + this.c;
        }
        catch (error) {
            console.log(error);
        }
    }

    get area () {       
        try {
            let p = (this.a + this.b +this.c) / 2;
            return this.area = Number.parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
        }
        catch (error) {
            console.log(error);
        }
    } 

   getTriangle (a, b, c) {        
        if (a + b <= c || b + c <= a || c + a <= b) {
            throw new Error('Ошибка! Треугольника не существует');
        }  
        const triangle = new Triangle(a, b, c);
        triangle.perimeter;
        triangle.area;
        return triangle;
    }
}

