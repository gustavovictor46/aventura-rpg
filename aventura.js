// Configurações base do personagem
let nome = "Oberon";
let classe = "Assassino";
let subclasse= "Mago";
let nivel = 100;
let vida = 1000;
let ouro = 65393;
let xp = 15000;
let stamina = 100;
let agilidade = 440;
let escudo = 350;

//Itens e status
const NOME_ARMA= "Arco Conjurado";
const NOME_ARMA_NOVA = "Adaga Venenosa Encantada"
const DANO_BASE= "300";
const DANO_CRITICO= "300";
const NOME_ARMADURA= "Armadura do Elfo Negro Encantado";
const DEFESA_BASE= "500";
ataqueTotal = nivel + DANO_BASE;
defesaTotal = DEFESA_BASE + (nivel/2);

vidaSuficiente = vida > 750;
ataqueForte = ataqueTotal > 300;
nivelAvancado = nivel >= 95;
podeEnfrentarLegolas= vidaSuficiente && (ataqueForte || nivelAvancado);

console.log("Início da Jornada de" + nome);
console.log(`Nível: ${nivel}, XP: ${xp}, Ouro: ${ouro}, Vida: ${vida}`);

console.log("Prólogo");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome}, o verdadeiro Rei dos Elfos, tomou seu trono, que fora há muito tempo usurpado por Legolas Aragorn.`);
console.log(`${nome} foi informado por Puck, seu fiel amigo e Conselheiro, que Legolas Aragorn teria fugido e que estava formando um exército para tomar o trono novamente, ele começou a treinar e se preparar para uma guerra e adquiriu 150 de XP.`);
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

console.log(`${nome} e seus cavaleiros atravessam a Floresta dos Susurros, ela é chamada assim, porque os ventos levam mensagens dos deuses antigos da Era de Gelo e Sombras, que ora terminou com a chegada dos Stormcloaks e seus dragões, estes são ancestrais de ${nome}, o que torna herdeiro do trono. Legolas tirou os Stormcloaks do poder na Batalha de Riverwood há 25 anos, assassinando o Rei Louco, tio de ${nome}, e eliminando todos os herdeiros de sangue do trono, restando apenas dois, um bebê que havia desaparecido e ${nome}, mas Legolas não sabia que o pequeno ${nome} Stormcloak conseguira fugir. Com apenas 6 anos de idade, foi resgatado pelos J'ahares, assassinos treinados que o treinaram e ensinaram tudo o que sabem sobre magia e assasinato, sempre silencioso e mortal.`);

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

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

let local = "Harrenhall, Raven Shaft";
let missaoFinal = "Confrontar Legolas Aragorn";

console.log("Capítulo 3: Um Estranho No Ninho dos Corvos");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome} é levado para o castelo de Legolas Aragorn, ao Norte, frio e sombrio, ao topo da colina mais alta do Reino dos Elfos, em ${local}. Lá, Legolas e sua esposa, a infame Aela, uma dama vermelha,um tanto quanto misteriosa e sombria, o recebe com cordialidade e o deixa a vontade pelo castelo.`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome} está hospedado em um quarto sofisticado, no andar de cima do castelo, ele se senta em uma cadeira próxima a uma janela grande, contemplando a paisagem do Reino dos Elfos Negros, enquanto espera a hora do banquete no Hall dos Corvos.`);
console.log(`Até que algum objeto estranho atinge e atravessa a janela do quarto. O objeto era um gancho preso a uma corda e quem atirou pela janela foi um dos seus guardas reais, que estava escalando a torre carregando as poções venenosas e os encantamentos nas costas, enquanto o outro estava infiltrado no castelo, mas até então, nenhuma notícia do seu paradeiro, apenas um pergaminho com a planta da torre que ele furtou da biblioteca e entregou para o o guarda para quando ele fosse de encontro com ${nome}.`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome} e o guarda se sentam na mesa do quarto para discutir o plano de ${missaoFinal}: antes do banquete iniciar, o guarda irá usar o encatamento de invisibilidade e adentrar a cozinha para envenenar a comida e o vinho, depois nocautear um dos guardas e se disfarçar como guarda de Legolas para se infiltrar no banquete junto do outro desaparecido guarda, para caso algo dê errado, ${nome} e os guardas utilizam os encantamentos contra os guardas, Legolas e Aela, escapando do reino e vencendo a batalha, mas ${nome} não está confiante, Legolas é astuto, poderoso e violento, enquanto Aela é uma dama vermelha, uma feiticeira que controla a magia do caos e das profundezas, por isso prefere que tudo seja executado na cautela.`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`Os dois combinam um sinal sutil e imperceptivel para se comunicarem durante o banquete, o guarda sai pela ventilação e se esconde na cozinha, enquanto ${nome} se arruma para o banquete, vestindo uma roupa de veludo azul, adornados com fios de ouro e prata, presente de Aela por aceitar o convite para o banquete e não atacar seu marido.`); 

console.log(`${nome} se dirige ao Hall dos Corvos, onde o banquete será realizado, e é recebido por Legolas Aragorn e Aela Aragorn, com um sorriso cordial e um olhar penetrante. Todos se sentam à mesa e são recebidos com vários dançarinos e músicos que tocam velhas cantigas de celebração dos deuses antigos, celebrando a chegada de ${nome} ao reino e a esperança de um acordo de paz entre os dois reinos.`);

console.log(`Depois da belissima recepção, o banquete começa, com Legolas e Aela servindo frutos que colheram do bosque antes de ${nome} chegar. Todos se sentam e começam a comer os frutos, enquanto ${nome} percebe uma tensão no ar, algo está errado. Ele olha para os guardas que estão na porta da cozinha enquanto faz o sinal, mas não obtém resposta, ele olha para os guardas que estão na porta do Hall e vê eles fechando a porta.`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`Uma música sombria começa a tocar e Legolas se levanta, dizendo: 'Vamos todos brindar o nosso convidado especial, ${nome}, o Rei dos Elfos e de todo o continente, que veio de tão, tão distante para nos visitar... E que aposto que deve ter sido um caminho árduo e cansativo para chegar até aqui sozinho, não é? Enfim, vamos dispensar as formalidades e tratar de negócios.' Aela se vira e encara ${nome}, enquanto Legolas discursa, seu olhar era vazio e revelava o abismo que havia em sua alma, era uma forma de ameaça, caso ele não aceitasse o acordo de Legolas.`);

console.log(`${nome} diz a Legolas que não pode negociar enquanto Aela estiver olhando para ele daquela forma, Legolas então se levanta e aproxima de Aela, dizendo: 'Aela, minha querida, por favor, não quer constranger nosso convidado desse jeito, não é mesmo? Sente-se meu bem e aproveite desse maravilhoso vinho.' Aela então se senta e propõe um brinde, pedindo desculpas pelo comportamento e agradecendo ${nome} por aceitar o convite.`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`Todos brindam e bebem o vinho, enquanto os serviçais traziam o banquete principal, todos menos ${nome} e Legolas, que estranhamente se recusou a beber o vinho que ora fora envenenado pelo guarda a pedido de ${nome}. Enquanto todos bebem, Legolas se levanta e canta em outra língua: 'And who are you, the proud lord said, that I must bow so low? Only a raven of a different plume, that's all the thuth I know.'`);

console.log(`Todos presentes que tomaram do vinho caem agonizando no chão, enquanto Legolas com seu sorriso sádico continua a cantar a mesma melodia, que ora estava sendo tocada pelos músicos: 'And so he spoke, and so he spoke, the Lord of Raven Shaft, but now the rain pouring this hall, with not a soul to hear.'`);

console.log(`${nome} se afasta da mesa empunhando sua ${NOME_ARMA_NOVA} e grita: 'SEU SÁDICO, VOCÊ SABIA DE TODO PLANO E MESMO ASSIM DEIXOU SEU PRÓPRIO POVO MORRER, SUA ESPOSA MORRER, TU CANTAS E DANÇAS O LAMENTO DE SEU PRÓPRIO POVO, SEU MONSTRO'. Legolas então se aproxima da tampa do prato principal e a abre dizendo: 'Então era esse o seu grande plano? Condenou a alma de dois pobres homens pela minha, de minha esposa e todo meu povo? A custo de que? O Reino é todo seu, você venceu, nunca quis tomar o trono de volta, tudo que ouviras eram rumores inventados por desertores do meu reino, eu sabia que viria.'No prato havia a cabeça dos dois guardas de ${nome}. 'NÃOOOOO! SEU MISERÁVEL MENTIROSO! VOCÊ É UM MONSTRO!' grita ${nome}, que avança em Legolas com sua ${NOME_ARMA_NOVA}.`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");
if (stamina >= 110) {
    console.log(`${nome} ataca Legolas, com uma tática deseperada e força bruta!`);
} else if (agilidade >= 600){
    console.log(`${nome} se esgueira mais rápido, antes mesmo que Legolas possa desviar e empunha-lá em seu coração!`);
} else {
    console.log(`${nome} se joga em cima de Legolas, mas deixa ${NOME_ARMA_NOVA} cair, restando apenas seus punhos, já que não trouxera seu ${NOME_ARMA}.`)
}
console.log(`${nome} fica com a mão suja do sangue de Legolas, que ainda com pouca vida diz: 'Eu... nunca... quis o trono... tive que fazer o que fiz... para salvar o reino da profecia dos Corvos... que dizia que o as portas do Inferno se abririam quando o último Stormcloak reinasse... eu estava errado... a profecia estava... quando sentastes no trono, não recebemos o sinal dos ventos dos deuses antigos, até que você chegou aqui e os ventos mudaram... mas não puderá ser você... está aqui e não no trono...'`);
console.log(`Então é nesse momento que ${nome} ligou os pontos... Tudo fazia parte do plano de Puck... O Último Stormcloak...`);
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Fim do Capítulo 3...?");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

let inventarioAtual = ["Arco Conjurado", "Armadura do Elfo Negro Encantado", "Adaga Venenosa Encantada"];
console.log("Epílogo");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome} concebe a Legolas um Perdão Real e diz que se ele se juntar para derrotar Puck, será recompensado. Legolas aceita e convoca seu Atronach de fogo para ajudá-los durante a jornada. Antes de partirem, Legolas leva ${nome} para a Sala do Tesouro para novos upgrades de armas e poções.`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

let aliados = ["Legolas Aragorn", "Atronach de Fogo"];

for (let i = 0; i < aliados.length; i++) {
    let aliado = aliados[i];
    console.log("Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");
if (i === 0) {
    console.log("Como estrategista, " + aliado + " coordena os ataques e os prevê, tem poder mágico elevado e a fúria dos deuses elfícos");
    agilidade += 200;
} else {
    console.log("Como defensor, " + aliado + " defende toda equipe com seus golpes de chamas e e paredes de chama que bloqueia os ataques");
   escudo += 350;
}
}

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Capítulo 4: A Vingança da Fênix");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome} troca sua Adaga Venenosa Encantada pela Espada das Sombras, conhecida por muitos como a Arma do Diabo, essa espada é capaz de roubar as almas dos inimigos, acender as chamas azul do Inferno de Hades e abrir portais dimensionais.`);

let itemRemovido = inventarioAtual.pop();
inventarioAtual.push("Espada das Sombras");

console.log(`${nome} então ficou com: ${inventarioAtual}`);

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`${nome} também recolheu alguns tesouros do báu: moedas de prata, jóias e barras de ouro`);

let tesouroColetado = [];

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`Eles partem em direção ao sul, de volta para o Castelo de ${nome}, no qual Puck está reinando agora e inícia seu Reinado das Sombras em todo o Reino dos Elfos`);
console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Fim do Capítulo 4");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Capítulo 5: Deus e o Diabo na Terra do Sol");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log(`Depois de dias caminhando, eles chegaram ao Reino e encontraram a cidade destruída, civis e cavaleiros mortos, uma guerra ocorreu ali. O céu estava escuro, coberto com a Nuvem de Trevas, uma magia proibida que só pode ser utilizada por almas condenadas.`);

console.log(`${nome}, Legolas e seu Atronach, entraram no castelo, suas paredes estavam cobertas com raízes da Yggdrasil, mas corrompida pelas trevas.`);

let salasCastelo = ["Hall Principal", "Sala do Trono", "Biblioteca dos Elfos"];

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

for (let i = 0; i < salasCastelo.length; i++) {
    console.log("Biblioteca dos Elfos " + (i + 1) + ": " + salasCastelo[i]);

    if (i === 0) {
        console.log(nome + " Encontra um Cristal do Caos");
        stamina += 100;
    } else if (i === 1) {
        console.log(nome + " Encontra o colar de sua filha Rhaenyra");
        tesouroColetado.push("Colar de Rhaenyra");
    } else {
        console.log(`${nome} tropeça nas raízes das trevas`);
        vida -= 70;
    }
}

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Depois de explorar o castelo, os três subiram até o topo do castelo, de onde vinha as Nuvens de Trevas.");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

console.log("Fim do Capítulo 5");

console.log("⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖");

