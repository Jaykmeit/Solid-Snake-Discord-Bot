const Discord = require('discord.js');
const token = 'NTUwNjcwNjM1MTg2MTI2ODU4.D1mDBA.6OFcUEUenVAHvbFoUj2VE3rRziI';

const bot = new Discord.Client();

bot.on('message', (msg) => {
	if (msg.content === '!codec') {
			var replies = [
			"Agacharse y tumbarse generan mucha mayor estabilidad a la hora de disparar que estando de pie.",
			"Se puede alcanzar a saber por intuición la potencia de un arma observando el tipo de calibre que implementa. Un rifle de asalto que utiliza un calibre 7.62 termina siendo más potente que uno de 5.56. Sin embargo, las armas que emplean un calibre más potente terminan siendo bestias de las cuáles hay que aprender a domar.",
			"Por alguna razón, las sartenes son capaces de bloquear proyectiles. Algunos consideran que es un perfecto protector de la retaguardia.",
			"Los oponentes pueden detectarte desde largas distancias en base a tu movimiento. Tumbarse puede complicar la visión de tus oponentes para que puedan encontrarte. Usar un *Ghillie* puede ser la mejor opción para no ser avistado mientras te hayas tumbado en el césped.",
			"El uso de las granadas de humo es primordial en un perímetro abierto y con cobertura escasa. Arrojar granadas de humo generan cortinas donde tus oponentes no pueden alcanzar a verte a través de él. Lo cuál, quiere decir que las probabilidades de que te alcancen si se les antoja disparar se reduzcan mucho.",
			"Las granadas cegadoras son factor clave de uso en combates CQC. En un perímetro cerrado, habrán personas esperándote dentro de una sala para molerte a disparos. Usar una granada cegadora puede darte la oportunidad de generar un ataque sin que ellos puedan tomar una iniciativa mayor o una ventaja.",
			"Las granadas de fragmentación son cargas explosivas que emiten un daño en un radio de cinco metros por lo usual. Las granadas de fragmentación son muy útiles cuando un oponente permanece en un perímetro del cuál no se va a mover. Las granadas de fragmentación tienen un periodo de detonación de cinco segundos. Es aconsejable intentar calcular en relación de distancia y ángulo el tiempo necesario para que la granada detone cuando alcance el area al ser arrojada.",
			"Es muy ocasional encontrar una pistola de bengalas. Cuando encuentres alguna, aprovecha su uso para solicitar un paquete aéreo. Si por asomo encuentras una pistola de bengalas en el cadáver de alguien, asegúrate de recoger las bengalas que su cuerpo puede poseer.",
			"Los paquetes aéreos son objetos que los aviones que cruzan y arrojan dentro del area segura. Dentro de los paquetes aéreos siempre encontrarás un Casco, un blindaje y una mochila de tercer nivel. Adicionalmente, también encontrarás un arma que no aparece en el mapa para recoger en sí. Y ocasionalmente implementaciones para armas o sustancias para consumir (*Analgésicos*, o una *Jeringa de adrenalina*). Mucha gente luchará por el paquete aéreo. Si tienes la oportunidad de recoger lo que hay dentro de ella, más te vale ser rápido o terminarás en problemas.",
			"El medidor de resistencia incrementa cuando consumes sustancias. Estas, entregarán regeneración de salud. También darán un bono de velocidad de movimiento con tal de que el medidor supere cierto límite. Las bebidas enegergizantes traen una sustancia muy extraña que genera resistencia en el cuerpo. Y por alguna razón, efectos regenerativos y sanatorios. Sin embargo, es más optable utilizar analgésicos o una jeringa de adrenalina para aplicar una dosis de resistencia mayor.",
			"Exponer el cuerpo entero a la hora de combatir puede suponer un problema. La cobertura es primordial para protegerte del alcance de los proyectiles. Es muy recomendable estar detrás de una pared para una mayor protección. Inclinarse desde una pared es una manera de tomar ofensiva sin exponer tu cuerpo en totalidad y será más difícil para tus oponentes que te alcancen.",
			"Flanquear a tus oponentes puede ser una manera viable de rematarlos tras *noquearlos*. Sin embargo, dispersarse de tu equipo puede terminar siendo muy arriesgado.",
			"El rifle francotirador AWM es el más potente del grupo que encontrarás. AWM es el único rifle Francotirador; solo hayable en paquetes aéreos; que puede tener un alcance de mil metros sin que la bala caiga. El calibre empleado en el rifle AWM es un .50, lo que quiere decir que incluso teniendo un casco de tercer nivel, puede romperlo con un solo alcance y dejarte en vida crítica. Sin él, podrías considerarte hombre muerto.",
			"Las miras son implementaciones en las armas que se deben aprovechar. Cuando miras a través de un retículo, pre-define hacia dónde irá la bala de manera digital. Algunas miras que comienzan a tener uso en rifles francotiradores. Como la mira ACOG (x4), Mira x6, o la mira x8 CQBSS. Estas tienen implementaciones para tener un cálculo de trayecto de bala para el que utiliza el arma. Se determinan marcadores para que en base de la distancia entre el arma y el propio oponente, se utilicen para que la bala le alcance en el trayecto que ambos forman.",
			"La pistola P92 es una imitación de la pistola Beretta M92F que utilicé durante mis días en FOXHOUND y posteriormente una versión tranquilizadora durante una misión para recopilar información de un modelo de Metal Gear hayado en un barco de los Marines cerca del Río Hudson, Nueva York. Beretta M92F es una pistola de 9mm bastante reconocida por su estabilidad y buen funcionamiento como arma de sigilo. Incluye 15 municiones dentro de la recámara, pero puede extenderse hasta 20 si le colocas un cargador extendido.",
			"La pistola P1911 es una imitación de M1911A1. Es el modelo utilizado por *Big Boss* durante su misión __Snake Eater__. Una pistola de origen Estadounidense que emplea el calibre .45 ACP. Algo ruidosa pese al silenciador, pero suficientemente potente como para hacer bastante daño con un disparo en la cabeza. Contiene 7 municiones en recámara. Se pueden extender a 12 con un recargador ampliado.",
			"Las casas y edificios, así como los apartamentos son lugares bastante ideales para tomar cobertura si te ves rodeado de oponentes por cualquier ángulo. Sin embargo, has de tener cuidado con las granadas que pueden arrojar adentro. Los espacios tienden a ser pequeños, evade y mantén distancia donde arrojen granadas.",
			"El modelo de rifle de asalto M16 suele ser confundido muy facilmente por el modelo actual M4. Tomó lugar por muy poco tiempo en el bando Estadounidense durante la guerra de la selva en Vietnam. Ya que debido al fango, las armas se encasquillaban muy fácilmente. Posteriormente desarrollaron una arma que le daría similaridad, con la implementación de ser un arma con disparo automático, y no a modo de *ráfaga*, nombrándose M4.",
			"Aunque las carabinas de calibre 5.56 no sean tan potentes como las de 7.62, implementan soportes de modificación para garantizar una mayor precisión con esas armas. A veces, una persona afavora un arma precisa que una bestia a la qué domar.",
			"La recarga manual de un rifle francotirador Kar98k es un proceso más lento que del resto. Se deben insertar proyectiles dentro del rifle ya que no hay una recámara asignada. Sin embargo, se pueden colocar las 5 rondas cuando se agota la munición. Kar98k es un rifle francotirador con bastante daño escalado cuando se realiza un disparo en la cabeza."
			]
			
			var result = replies[Math.floor(Math.random() * replies.length)];
			
			msg.reply(result);
			
	}
});

bot.on('ready', () => {
	console.log('Bot is now connected');

	bot.channels.find(x => x.name === 'general').send("Al habla Snake. Os hice esperar, ¿eh?");
});

bot.login(process.env.BOT_TOKEN);
