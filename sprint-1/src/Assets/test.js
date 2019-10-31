let string = 'this is a sentence';
let stringSplit = string.split(” “);
//console.log(stringSplit);
console.log(stringSplit[3].length);
stringSplit.forEach((item) => {
   if (item.length > 5) {
       //console.log(item.split(‘’).reverse().join());
       item.split(‘’).reverse().join();
       console.log(typeof item);
       console.log(item);
   }
})