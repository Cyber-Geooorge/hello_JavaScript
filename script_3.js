let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for (let x = 1; x <= floors; x++){
    let result = "";

    for (let y = 1; y <= floors - x; y++){
        result += " ";
    }
    
    for (let z = 1; z <= x; z++){
        result += "#";
    }
    console.log(result);
}
