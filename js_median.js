function cariMedian(arr) {
    // you can only write your code here!

    //Condition for arr.length = odds
    if (arr.length % 2 !== 0) {
        var a =  Math.floor(arr.length/2) 
        var jarak_ganjil = a + 1;
        return arr[jarak_ganjil-1] //Because the index starts from 0
    } else { //Condition for arr.length = evens
        var a = (arr.length/2) + 1;
        var jarak_genap = ((arr[(arr.length/2)-1]) + arr[a-1])/2
        return jarak_genap;
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5