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
            return this._perimeter = this.a + this.b + this.c;
        }
        catch (error) {
            return error;
        }
    }

    get area () {       
        try {
            let p = (this.a + this.b +this.c) / 2;
            return this._area = Number.parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
        }
        catch (error) {
            return error;
        }
    }   
    getTriangle (a, b, c) {        
        if ((c - (a + b) > 0) || (a - (b + c) > 0) || (b - (c + a) > 0)) {
           throw "Ошибка! Треугольник не существует";
        }
        return;
    }
}

