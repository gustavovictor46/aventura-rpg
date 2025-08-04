let ouro = 100;
let valorEspada = 50;
console.log("Saldo Inicial", ouro);
let xp =1;

if (ouro >= valorEspada && xp >= 80) {
    console.log("Oba! Comprou a espada mágica.");
    ouro -= valorEspada;
    console.log("Saldo final", ouro);
} else if (ouro >= valorEspada && xp <=50){
    console.log("Você pode ter dinheiro, mas não tem xp suficiente para essa compra!")
} else {
    let diferenca = valorEspada - ouro;
    console.log(`Oie pobrinho, faltam ${diferenca} moedas de ouro para você comprar sua espada`);
}

