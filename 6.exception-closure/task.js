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

