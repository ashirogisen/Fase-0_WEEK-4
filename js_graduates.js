function graduates (students) {
  // Code disini
var arr_list_class = [];

for (var i = 0; i < students.length; i++) {
  if (arr_list_class.indexOf(students[i].class) === -1) {
    arr_list_class.push(students[i].class);
  }
}

var arr_data_class = [];

for (var i = 0; i < arr_list_class.length; i++) {
  arr_data_class.push([]);
  for (var j = 0; j < students.length; j++) {
    if (students[j].class === arr_list_class[i]) {
      arr_data_class[i].push(students[j]);
    }
  }
}
console.log(arr_data_class);

var result = {};

for (var i = 0; i < arr_data_class.length; i++) {
  var obj_GraduateData = {
    name : '',
    score: 0,
  }
  
  var arr_Graduates = [];
  for (var j = 0; j < arr_data_class[i].length; j++) {
    if (arr_data_class[i][j].score > 75) {
      obj_GraduateData.score = arr_data_class[i][j].score
      obj_GraduateData.name = arr_data_class[i][j].name
      arr_Graduates.push(obj_GraduateData);
    }
    obj_GraduateData = {};
  }
    result[arr_list_class[i]] = arr_Graduates;
}  
return result
}
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  // console.log(graduates([
  //   {
  //     name: 'Alexander',
  //     score: 100,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Alisa',
  //     score: 76,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Vladimir',
  //     score: 92,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Albert',
  //     score: 71,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Viktor',
  //     score: 80,
  //     class: 'tigers'
  //   }
  // ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  // console.log(graduates([])); //{}