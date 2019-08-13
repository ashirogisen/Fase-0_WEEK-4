function ubahHuruf(kata) {
    // you can only write your code here!
    var huruf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o' ,'p' ,'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a'];
    var huruf_array = [];

    console.log(kata[0]);
    
    for (var i = 0; i < kata.length; i++) {
        huruf_array.push(kata[i])
    }
    console.log(huruf_array);
    
    var index = 0;
    for (var i = 0; i < huruf.length; i++) {
        for (var j = 0; j < huruf.length; j++) {
            if (huruf_array[index] === huruf[j]) {
                huruf_array[index] = huruf[j+1]
                index++
            }
        }
        
    }
    console.log(huruf_array);
    return huruf_array.join('')
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu

  