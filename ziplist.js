const alpha = ['a', 'b', 'c'];
const nums = [1, 2, 3];

function zipList(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 0;
  }
  const zip = [];
  for (let i = 0; i < arr1.length; i++) {
    zip.push(arr1[i]);
    zip.push(arr2[i]);
  }
  return zip;
}

console.log(zipList(alpha, nums));

function zipListTheSimpleWay(arr1, arr2) {
  const zip = _.zip(arr1, arr2);
  return _.flatten(zip);
}

console.log(zipListTheSimpleWay(alpha, nums));
