let minaFrukter = ["clementin", "apelsin", "banan", "äpple", "päron"];
let blandadArray = ["joanna", 13, 23, [1, 2, 3]];



minaFrukter[1] = "kiwi"; // Ändrar värdet på index 1

console.log(minaFrukter);
console.log(blandadArray);

console.log("Antal objekt i blandadArray:", blandadArray.length);

console.log(minaFrukter[0]);
console.log (minaFrukter[minaFrukter.length -1]);

let samman = minaFrukter.concat(blandadArray);
console.log(samman);

let klon = minaFrukter.slice();
console.log(klon);

/* let a = [1,2,3];
let b = [4,5,6];

let samman = a.concat(b);
console.log(samman);*/