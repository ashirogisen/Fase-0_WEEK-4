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
            console.log('Bilangan Bukan Prima');
        }
        else {
            console.log('Bilangan Prima');
        }
    } else {
        console.log('Bilangan Bukan Prima');
    }

}

prima(9);
