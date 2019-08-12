function fpb(angka1, angka2) {
    // you can only write your code here!
    var hasil = [];
    var hasil2 = [];
    //Factorization for first parameter
    for (var i = 0; i <= angka1; i++) {
        if (angka1 % i === 0) {
            hasil.push(i)
        }
    }

    //Factorization for second parameter
    for (var i = 0; i <= angka2; i++) {
        if (angka2 % i === 0) {
            hasil2.push(i)
        }
    }

    //Push same number (element) from first and second parameter into fpb_final (array)
    var fpb_final = [];
    for (var i = 0; i < hasil.length; i++) {
        for (var j = 0; j < hasil2.length; j++) {
            if (hasil[i] === hasil2[j]) {
                fpb_final.push(hasil[i])
            }
        }
    }

    //Take the biggest number (element) (FPB) 
    var max = 0;
    for (var i = 0; i < fpb_final.length; i++) {
        if (fpb_final[i] > max) {
            max = fpb_final[i]
        }
    }
    return max;
    
        
}

  


//   TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1