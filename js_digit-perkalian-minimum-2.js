function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    
    //Factorization (T-Key)
    var faktor = [];
    if (angka > 1) {
        for (var i = 0; i <= angka; i++) {
            if (angka % i === 0) {
                faktor.push(i);
            }
        }
    } else if (angka === 1) { //Condition for 1 (number)
        faktor.push(angka)
        faktor.push(1)
    }

    console.log(faktor);
    
    //Factorization (T-Key) with multiplication
    var index = faktor.length;
    var faktor_2 = [];
    loop = (index/2) + 1; //Factorization for bigger number
    if (faktor.length > 1) {
        for (var i = 0; i <= loop; i++) {
            faktor_2.push([faktor[i], faktor[index-1]]);
            index--;
            if (index === faktor.length/2) {
                break;
            }
        }
    } 
    console.log(faktor_2);
    
    //Join faktor_2 to count the frequency of length of each multiplication partnership
    var countMin = 0;
    var join_faktor_2 = [];
    for (var i = 0; i < faktor_2.length; i++) {
        join_faktor_2.push(faktor_2[i].join(''))
    }
    console.log(join_faktor_2);

    //Count the frequency of length of each multiplication partnership
    var count_faktor_2 = [];
    for (var i = 0; i < join_faktor_2.length; i++) {
        count_faktor_2.push(join_faktor_2[i].length);
    }
    count_faktor_2.sort();
    console.log(count_faktor_2);

    //Take the smallest frequency
    var min = count_faktor_2[0];
    console.log(min);

    // var countMin = 0;
    // for (var i = 0; i < count_faktor_2.length; i++) {
    //     if (min === count_faktor_2[i]) {
    //         countMin++;
    //     }
    // }

    // console.log(countMin);
    return min

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2