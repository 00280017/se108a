const _ = module.exports = {}

// _.chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
// _.chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
_.chunk = function (list, n) {
  const clist = []
  for (let i=0; i<list.length; i+=n) {
    clist.push(list.slice(i, i+n))
  }
  return clist
}

//_.drop([1, 2, 3]);
// => [2, 3]
 
//_.drop([1, 2, 3], 2);
// => [3]
 
//_.drop([1, 2, 3], 5);
// => []
 
//_.drop([1, 2, 3], 0);
// => [1, 2, 3]
_.drop = function (list, n=1) {
  let rlist = []
  for (let i=n; i<list.length; i++){
    rlist.push(list[i])
  }
  return rlist
}

//_.dropRight([1, 2, 3]);
// => [1, 2]
 
//_.dropRight([1, 2, 3], 2);
// => [1]
 
//_.dropRight([1, 2, 3], 5);
// => []
 
//_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
_.dropRight = function (list, n=1) {
  let rlist = []
  for (let i=0; i<list.length-n; i++){
    rlist.push(list[i])
  }
  return rlist
}

//_.head([1, 2, 3]);
// => 1
 
//_.head([]);
// => undefined
_.head = function (list, n=0) {
  let rlist = []
  for (let i=0; i<1; i++){
    rlist.push(list[i])
  }
  return rlist
}

//_.head([1, 2, 3]);
// => [1]
 
//_.head([]);
// => [undefined]
_.head = function (list) {
  let rlist = []
  if (list == [])  rlist.push(undefined)
  else rlist.push(list[0])
  return rlist     
}
