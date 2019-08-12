function shoppingTime(memberId, money) {
    // you can only write your code here!
    var arr_list = [1500000, 500000, 250000, 175000, 50000]
    var arr_list_nama = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    var arr_list_fixed = [];
    var arr_list_nama_fixed = [];

    //Validation if the first parameter (memberId) is ''
    if (memberId === '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } 
    
    //Push the customer's name and the items they can buy with their money (money > item's price)
    for (var i = 0; i < arr_list.length; i++) {
      if (money > arr_list[i]) {
          arr_list_fixed.push(arr_list[i])
          arr_list_nama_fixed.push(arr_list_nama[i])
      }
      else if (money < arr_list[arr_list.length]) {
          return 'Mohon maaf, uang tidak cukup'
      }
    }
    
    //To count the total of item's price
    var total = 0;
    for (var i = 0; i < arr_list_fixed.length; i++) {
      total = total + arr_list_fixed[i];
      if (money <= total) {
          break;
      }
    }

    //To get the value of change
    var change = money - total;

    //Declaration for object to return
    var shop = {
        memberId: memberId,
        money: money,
        listPurchased: arr_list_nama_fixed, 
        changeMoney: change
    }
    
    
    return shop
  }


  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  // //{ memberId: '82Ku8Ma742',
  // // money: 170000,
  // // listPurchased:
  // //  [ 'Casing Handphone' ],
  // // changeMoney: 120000 }
  // console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  // console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  // console.log(shoppingTime()); ////Mo