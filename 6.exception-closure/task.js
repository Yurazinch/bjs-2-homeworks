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

    validateTriangle (a, b, c) {
        if (a + b <= c || b + c <= a || c + a <= b) {
            throw new Error('Ошибка! Треугольника не существует');
        }
    }

    get perimeter () {
        this.validateTriangle(a,b,c);
        try {
            return this._perimeter = this.a + this.b + this.c;
        }
        catch (error) {
            console.log(error);
        }
    }

    get area () {
        this.validateTriangle(a,b,c);
        try {
            let p = (this.a + this.b +this.c) / 2;
            return this._area = Math.floor(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)), 3);
        }
        catch (error) {
            console.log(error);
        }
    } 

    getTriangle (a, b, c) {
        return {
            'Длинна а': a,
            'Длина b': b,
            'Длина с': c,
            'Периметр': this.perimeter,
            'Площадь': this.area,
        }
        
    }
}

