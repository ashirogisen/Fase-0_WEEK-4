function changeMe(arr) {
    // you can only write your code here!
    for (var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            var obj = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: arr[i][3]
            }
            if (arr[i][3] === undefined) {
                arr[i][3] = 'Invalid Birth Year'
            }
        }
        print_obj = console.log(obj);
    }
    return print_obj;
}

  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
//   changeMe([]); // ""