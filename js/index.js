/* let minaFrukter = ["clementin", "apelsin", "banan", "äpple", "päron"];
let blandadArray = ["joanna", 13, 23, [1, 2, 3]];



minaFrukter[1] = "kiwi"; // Ändrar värdet på index 1

console.log(minaFrukter);
console.log(blandadArray);

console.log("Antal objekt i blandadArray:", blandadArray.length);

console.log(minaFrukter[0]);
console.log (minaFrukter[minaFrukter.length -1]);

let frukter = minaFrukter.push("vindruvor");
let först = minaFrukter.unshift("jordgubbar");

let samman = minaFrukter.concat(blandadArray);
console.log(samman);

let klon = minaFrukter.slice();
console.log(klon);

let fruits = ["kiwi", "äpple", "päron"];

let fruits2 = fruits.push("banan");
let fruits3 = fruits.unshift("clementin");
let fruits4 = fruits.pop(); // Tar bort sista elementet
let fruits5 = fruits.shift(); // Tar bort första elementet
let fruits6 = fruits.splice(1, 0, "apelsin"); 
let fruits7 = fruits.splice(2, 1, "citron", "mango", "melon"); // Tar bort ett element på index 2 och lägger till "citron"
console.log(fruits);

let names = ["joanna", "johan", "jenny", "josef"];
let names2 = names.splice(1, 2);

console.log(names);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums2 = nums.reverse(); // Vänder på ordningen i arrayen
//let nums2 = nums.sort((a, b) => a - b); // Sorterar i stigande ordning
console.log(nums);*/

let str = "supercalifragilisticexpialidocious";
let str1 = str.includes("n");
let str2 = str.includes("x");

console.log(str);
console.log(str1);

if (str1) {
    console.log("Strängen innehåller bokstaven 'n'");
}
else {
    console.log("Strängen innehåller inte bokstaven 'n'");
}

console.log(str2);

if (str2) {
    console.log("Strängen innehåller bokstaven 'x'");
}
else {
    console.log("Strängen innehåller inte bokstaven 'x'");
}

let indexOfP = str.indexOf("p");
console.log("Index of 'p':", indexOfP);

// let str3 = str [5];
console.log(str3);


/* let a = [1,2,3];
let b = [4,5,6];

let samman = a.concat(b);
console.log(samman);*/