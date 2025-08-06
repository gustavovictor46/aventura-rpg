// Configurações base do personagem
let nome = "Oberon";
let classe = "Assassino";
let subclasse= "Mago";
let nivel = 100;
let vida = 1000;
let ouro = 65393;
let xp = 15000;
let stamina = 100;

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
console.log(`${nome}, o verdadeiro Rei dos Elfos, tomou seu trono, que fora há muito tempo usurpado por Legolas Aragorn.`);
console.log(`${nome} foi informado que Legolas Aragorn teria fugido e que estava formando um exército para tomar o trono novamente, ele começou a treinar e se preparar para uma guerra e adquiriu 150 de XP.`);
xp += 150
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`${nome} se reúne com seu Conselheiro Real para discutir estratégias de ataque e defesa no Porto de Baltimore, que é a entrada do Reino dos Elfos, na ilha de Corto Maltese.`);
console.log(`Enquanto ${nome} se preparava para fazer um anúncio sobre a guerra, um assassino especialista em alquimia e disfarce contratado por Aragorn, se infiltrou no reino.`);
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`${nome} já estava a caminho do lugar onde anunciaria e declararia guerra com Aragorn, mas foi interrompido por seu fiel amigo e assistente Puck, que trouxe a mensagem que a Rainha Titânia, sua esposa, precisava conversar com ele urgentemente em relação a filha deles.`);
console.log(`${nome} foi as pressas se encontrar com sua esposa, que estava sentada no canto da Sala de Guerra e aparentava estar chorando, ${nome} ordenou que os deixassem a sós para discutir o que havia conhecido. ${nome} se aproximou de sua esposa e então foi atacado com uma adaga venenosa.`);
console.log("Titânia então se revela como o assasino enviado por Aragorn, enquanto a verdadeira Titânia e sua filha estavam caminhando juntas pelo Bosque da Recuperação");
console.log(`${nome} já fraco e morrendo utiliza sua magia para obliterar o assasino, que deixa cair poções de vida e encantamento no chão, ${nome} utiliza a poção de vida e recupera 40 pontos de vida`);
vida += 40
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`${nome} pega a adaga do assasino do chão e compra uma poção por 30 moedas de ouro para recuperar o encantamento de veneno, dobrando o dano da arma`);
ouro -= 30
DANO_BASE * 2
console.log(`Em um beco escuro, próximo ao Porto de Baltimore`);
console.log("Uma estranha flux de mana começa a surgir, e um portal se abre, um homem sem um dos braços aparece e diz: 'No céu tem pão?' e desaparece pelo portal em meio a risadas.");

// Estado atual da história
let localAtual = "Porto de Baltimore";
let missaoAtual = "Invasão do Reino dos Elfos";
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Capítulo 1: Renascimento");
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome} convoca seu exército para as frontes de batalha no ${localAtual}, onde ele irá discursar seu plano de ataque contra Legolas Aragorn.`);
console.log(`Para seu plano, ${nome} precisará de um especialista em alquimia para criar poções de encantamento e veneno, de preferência do mesmo nível de habilidade do assassino que o atacou.`);
console.log(`${nome} então vai até um velho amigo, um alquimista chamado Walter, que vive no subúrbio do Reino dos Elfos, na região de Whiterun. Walter cobrará 1000 moedas de ouro para ajudar ${nome} com a quantidade necessária para o plano`);
if (ouro >= 1000) {
    console.log(`Walter começa a preparar o veneno e os encantamentos para o plano de ${nome}`);
}
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`${nome} se despede do reino e deixa Puck como Rei Regente, comandando as defesas do reino, enquanto ele parte com seu cavalo e dois dos mais poderosos cavaleiros de todo o reino.`);
if (nivel >= 95) {
    console.log(`${nome} e sua Guarda Real prosseguem a viagem para o Reino dos Elfos Negros com o veneno e o encantamento para o plano`);
}
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`${nome} caminha em direção ao Norte, onde se encontra o Reino dos Elfos Negros, originário de Legolas Aragorn. Ele e seus fiéis cavalheiros já estão a 2 dias caminhando e resolvem parar por alguns dias para se recompor`);
if (stamina <= 150){
    console.log(`${nome} e seus cavaleiros vão parar para repousar`);
} 
console.log("Fim do Capítulo 1");
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Capítulo 2: A Queda");
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`${nome} e seus cavaleiros atravessam a Floresta dos Susurros, ela é chamada assim, porque os ventos levam mensagens dos deuses antigos da Era de Gelo e Sombras, que ora terminou com a chegada dos Stormcloaks e seus dragões, estes são ancestrais de ${nome}, o que torna herdeiro do trono. Legolas tirou os Stormcloaks do poder na Batalha de Riverwood há 25 anos, assassinando o Rei Louco, tio de ${nome}, e eliminando todos os herdeiros de sangue do trono, mas Legolas não sabia que o pequeno ${nome} Stormcloak conseguiu fugir com apenas 6 anos de idade, foi resgatado pelos J'ahares, assassinos treinados que o treinaram e ensinaram tudo o que sabem sobre magia e assasinato, sempre silencioso e mortal.`);
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`Enquanto ${nome} atravessa a floresta com seus cavaleiros, ele é parado por três bandidos, que o reconhecem e diz que Legolas Aragorn está oferencendo uma grande recompensa para quem trazer a cabeça de ${nome}, que oferece um acordo aos bandidos, se deixarem ele e seus cavaleiros passarem, ele dará 10000 moedas de ouro para cada um deles.`);
if (ouro >= 30000) {
    console.log("Os bandidos aceitam o acordo e deixam eles passarem em segurança e fornecem a informação de que Legolas está em acampando em uma pequena fortaleza ao Nordeste de onde eles estão, chamada de Forte Helgerd.");
} else { 
    console.log(`Os bandidos atacam ${nome} e seus cavaleiros com dardos sonolentos, derrubando todos no chão de uma só vez, capturando-os e levando-os até Legolas, para que ele mesmo possa decapitar ${nome}.`);
} 
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`${nome} e seus cavaleiros já próximos do Forte Helgerd sentam para discutir o plano de ataque, ${nome} diz que eles devem se infiltrar no forte disfarçados de guardas, e eliminar silenciosamente os guardas ao redor do forte, porém os cavaleiros temem que não possuem habilidade o suficiente para entrarem sem ser detectados, ${nome} então diz que irá seguir com o plano B, ele entrega o veneno e os encantamentos para os cavaleiros e pede para eles o encontrar ao Norte, no Reino dos Elfos Negros, enquanto ele vai entrar em Helgerd, mas antes precisa checar se tem habilidade para se infiltrar no forte sozinho.`);
if (classe === "Assassino"){
    console.log(`${nome} consegue se infiltrar sozinho no Forte Helgerd e eliminar os guardas que guardam as portas dos fundos do Forte.`);
} else {
    console.log(`${nome} não consegue e procede com os cavaleiros para o castelo de Aragorn e aguardam a chegada dele e seus cavaleiros`);
}
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
console.log(`Dentro do Forte, ${nome} entra disfarçado com os trajes dos guardas que ele derrotou. Ele encontra Legolas Aragorn conversando com alguém familiar... Era Puck! Seu amigo, conselheiro e o regente que está em seu lugar enquanto esteve fora. ${nome} não pode acreditar no que viu, então foi se aproximando dos dois, com a adaga empunhada, mas de repente os dois desaparecem, evaporaram e não deixaram rastros, ${nome} congela e fica imóvel... LEGOLAS ARAGORN REAPARECE E O ATACA COM DARDOS SONOLENTOS, ${nome} consegue desviar e atacar Legolas com seu Arco Conjurado, mas ele consegue se esquivar também e desaparece novamente... ${nome} então percebe que Puck não estava do lado de Legolas, mas sim era apenas uma ilusão criada por ele, ${nome} então corre para a porta de saída do Forte para enviar uma carta para Puck e Titânia, mas é interceptado por um dos guardas que o golpeou e o derrubou no chão, Legolas então reaparece e diz: 'Você é um tolo, caiu na emboscada mais idiota que já vi, parece que não aprendeu nada com os J'ahares, mas não se preocupe, não irei te matar, venha comigo para um jantar em meu castelo e poderemos conversar e negociar melhor.'`)
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Fim do Capítulo 2");
