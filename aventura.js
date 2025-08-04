// Configurações base do personagem
let nome = "Oberon o Rei dos Elfos";
let classe = "Assassino";
let subclasse= "Mago";
let nivel = 100;
let vida = 1000;
let ouro = 65393;
let xp = 15000;

//Itens e status
const NOME_ARMA= "Arco Conjurado";
const NOME_ARMA_NOVA = "Adaga Venenosa Encantada"
const DANO_BASE= "300";
const DANO_CRITICO= "300";
const NOME_ARMADURA= "Armadura do Elfo Negro Encantado";
const DEFESA_BASE= "500";
const AGILIDADE = "440";
ataqueTotal = nivel + DANO_BASE;
defesaTotal = DEFESA_BASE + (nivel/2);

vidaSuficiente = vida > 750;
ataqueForte = ataqueTotal > 300;
nivelAvancado = nivel >= 95;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log("Início da Jornada de" + nome);
console.log(`Nível: ${nivel}, XP: ${xp}, Ouro: ${ouro}, Vida: ${vida}`);

console.log("Prólogo");
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log("Oberon, o verdadeiro Rei dos Elfos, tomou seu trono, que fora há muito tempo usurpado por Legolas Aragorn.");
console.log("Oberon foi informado que Legolas Aragorn teria fugido e que estava formando um exército para tomar o trono novamente, ele começou a treinar e se preparar para uma guerra e adquiriu 150 de XP.");
xp += 150
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log("Oberon se reúne com seu Conselheiro Real para discutir estratégias de ataque e defesa no Porto de Baltimore, que é a entrada do Reino dos Elfos, na ilha de Corto Maltese.");
console.log("Enquanto Oberon se preparava para fazer um anúncio sobre a guerra, um assassino especialista em alquimia e disfarce contratado por Aragorn, se infiltrou no reino.");
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log("Oberon já estava a caminho do lugar onde anunciaria e declararia guerra com Aragorn, mas foi interrompido por seu fiel amigo e assistente Puck, que trouxe a mensagem que a Rainha Titânia, sua esposa, precisava conversar com ele urgentemente em relação a filha deles.");
console.log("Oberon foi as pressas se encontrar com sua esposa, que estava sentada no canto da Sala de Guerra e aparentava estar chorando, Oberon ordenou que os deixassem a sós para discutir o que havia conhecido. Oberon se aproximou de sua esposa e então foi atacado com uma adaga venenosa.");
console.log("Titânia então se revela como o assasino enviado por Aragorn, enquanto a verdadeira Titânia e sua filha estavam caminhando juntas pelo Bosque da Recuperação");
console.log("Oberon já fraco e morrendo utiliza sua magia para obliterar o assasino, que deixa cair poções de vida e encantamento no chão, Oberon utiliza a poção de vida e recupera 40 pontos de vida");
vida += 40
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log("Oberon pega a adaga do assasino do chão e compra uma poção por 30 moedas de ouro para recuperar o encantamento de veneno, dobrando o dano da arma");
ouro -= 30
DANO_BASE * 2
console.log("Em um beco escuro, próximo ao Porto de Baltimore");
console.log("Uma estranha flux de mana começa a surgir, e um portal se abre, um homem sem um dos braços aparece e diz: 'No céu tem pão?' e desaparece pelo portal em meio a risadas.");

// Estado atual da história
let localAtual = "Porto de Baltimore";
let missaoAtual = "Invasão do Reino dos Elfos";

console.log("Capítulo 1: A Queda");
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`Oberon convoca seu exército para as frontes de batalha no ${localAtual}, onde ele irá discursar seu plano de ataque contra Legolas Aragorn.`);
console.log("Para seu plano, Oberon precisará de um especialista em alquimia para criar poções de encantamento e veneno, de preferência do mesmo nível de habilidade que o assassino que o atacou."
)


