function urutkanAbjad(str) {
    // you can only write your code here!
    huruf = [];
    for (var i = 0; i < str.length; i++) {
        huruf.push(str[i])
    }
    console.log(huruf);
    
    //BubbleSort
    for (var i = 0; i < str.length - 1; i++) {
        for (var j = 0; j < str.length - i - 1; j++) {
            if (huruf[j] > huruf[j+1]) {
                var temp = huruf[j];
                huruf[j] = huruf[j+1];
                huruf[j+1] = temp;
            }
        }
    }
    var huruf_string = huruf.join('');
    return huruf_string
  }
  
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'