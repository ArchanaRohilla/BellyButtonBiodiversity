 cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(city){
    return city.City;
});

cityPopulation = cities.map(function(city){
    return city.population;
});

console.log(cityNames);
console.log(cityPopulation);


var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(number){
  return number>1;
});

console.log(larger);

var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(olderThanFive);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var letterS = words.filter(function(word){
    return word.charAt(0).toString() === "s"; 
  console.log(word.charAt(0).toString());
});

console.log(letterS);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge.reverse());

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b-a);
console.log(sortedAge);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
slice1=words.slice(0,3);
slice2=words.slice(3,);
console.log(slice1);
console.log(slice2);