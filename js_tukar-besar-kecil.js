function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var arr_kalimat = [];
    //Push each letter from first parameter (kalimat) into arr_kalimat(array)
    for (var i = 0; i < kalimat.length; i++) {
        arr_kalimat.push(kalimat[i])
    }
    console.log(arr_kalimat);

    var arr_kalimat_2 = [];
    
    //Process to make a.LowerCase() to a.UpperCase() and vice-versa
    for(var i = 0; i < arr_kalimat.length; i++) {
        var temp = '';
        if (arr_kalimat[i] === arr_kalimat[i].toUpperCase()) {
            temp = arr_kalimat[i].toLowerCase();
            arr_kalimat_2.push(temp);
        } else if (arr_kalimat[i] === arr_kalimat[i].toLowerCase()) {
            temp = arr_kalimat[i].toUpperCase();
            arr_kalimat_2.push(temp);
        }
    }
    console.log(arr_kalimat_2);

    //Get array back to string 
    var join_arr_kalimat_2 = arr_kalimat_2.join('');
    return join_arr_kalimat_2;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"