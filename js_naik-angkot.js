function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    console.log(arrPenumpang.length);
    var result = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var data = {
            penumpang: '',
            naikDari: '',
            tujuan: '',
            bayar: 0
        }
        data.penumpang = arrPenumpang[i][0]
        data.naikDari = arrPenumpang[i][1]
        data.tujuan = arrPenumpang[i][2]

        var arr_jarak = [];
        for (var j = 0; j < rute.length; j++) {
            if(data.naikDari === rute[j]) {
                arr_jarak.push(j+1)
            } else if (data.tujuan === rute[j]) {
                arr_jarak.push(j+1)
            }
        }
        var jarak = 0;
        jarak = Math.abs(arr_jarak[1] - arr_jarak[0])
        data.bayar = jarak*2000      
        
        result.push(data)
        data = {}
        
    }
    return result
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]