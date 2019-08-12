function prima (angka) {
    var countNotPrima = 0;
    var temp = 0;
    
    //Loop to find Prime Number
    for (var i = 2; i < angka; i++) {
        temp = angka % i;
        if (temp === 0) {
            countNotPrima++
        }
    }

    //Validation
    if (angka > 1) {
        if (countNotPrima > 0) {
            return 'Bilangan Bukan Prima'
        }
        else {
            return 'Bilangan Prima'
        }
    } else {
        return 'Bilangan Bukan Prima'
    }

}

console.log(prima(2));

