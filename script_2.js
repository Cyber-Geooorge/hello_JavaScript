let number = prompt("De quel nombre veux-tu calculer la factorielle ? ");


function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

console.log("Le résultat est: " + factorial(number));
