function cariModus(arr) {
    // you can only write your code here!

    //CASE to calculate frequency if the value of all element are same
    var frekuensi_sama = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          frekuensi_sama++;
        }
      }
    }
    if (frekuensi_sama === arr.length*arr.length) {
      return -1;
    }
    
    //CASE to calculate the biggest frequency if the value of all elements are different
    var frekuensi_akhir = 0;
    for (var i = 0; i < arr.length; i++) {
      var frekuensi = 0;
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j] && i !== j) {
          frekuensi++;
          if (frekuensi > frekuensi_akhir) {
            frekuensi_akhir = frekuensi;
            return arr[i]
          }
        }
      }
    }


    //CASE to handle if the value of all frequence are 1 (number)
    var frekuensi_2 = 0;
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {         
          frekuensi_2++;
          if (frekuensi_2 === arr.length) {
            return -1
          }
        }
      }
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1