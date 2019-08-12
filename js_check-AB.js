function checkAB(num) {
    // you can only write your code here!
    var arr_a = [];
    var arr_b = [];
    
    //Save index (a and b) into array
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            arr_a.push(i)
        } else if (num[i] === 'b') {
            arr_b.push(i)
        }
    }
    console.log(arr_a);
    console.log(arr_b);

    //Save value difference (between a and b) into array
    var difference = [];
    for (var i = 0; i < arr_a.length; i++) {
        for (var j = 0; j < arr_b.length; j++) {
            difference.push(arr_b[j] - arr_a[i])
        }
    }

    for (var i = 0; i < difference.length; i++) {
        difference[i] = Math.abs(difference[i])
    }
    console.log(difference);
    
    //Validation
    var count = 0;
    for (var i = 0; i < difference.length; i++) {
        if (difference[i] === 4) {
            count++;
        }
    }

    if (count > 0) {
        return true;
    } else {
        return false;
    }
    

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false