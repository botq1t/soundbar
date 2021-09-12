let sound = {
	victor: [
		{ phrase: 'Пашёл нахуй 1', sound: new Audio('audio/victor/fuck-you-1.mp3') },
		{ phrase: 'Пашёл нахуй 2', sound: new Audio('audio/victor/fuck-you-2.mp3') },
		{ phrase: 'Пашёл нахуй 3', sound: new Audio('audio/victor/fuck-you-3.mp3') },
		{ phrase: 'Пашёл нахуй 4', sound: new Audio('audio/victor/fuck-you-4.mp3') },
		{ phrase: 'Блюёт', sound: new Audio('audio/victor/blevon.mp3') },
	],
	sanya: [
		{ phrase: 'Круто', sound: new Audio('audio/victor/cool.mp3') },
		{ phrase: 'Пидорас', sound: new Audio('audio/victor/cunt.mp3') },
	],
}

let image = {
	victor: 2,
	sanya: 2,
}

console.log(sound);
$('.content__body').empty();

for (let key in sound) {
	$('.content__body').append(`<div id="${key}_card" class="content__card card"></div>`);
	let card = $(`#${key}_card`);
	for (let i = 0; i < sound[key].length; i++) {
		card.append(`
			<div id="${key}_item_${i}" class="card__item">
				<img src="img/${key}/${key}_${Math.floor(Math.random() * image[key])}.jpg" alt="${key}_item_${i}" class="card__img">
				<div class="card__description">${sound[key][i].phrase}</div>
			</div>
		`);
	}
}

$('.header__extend').click(function () {
	$('.header__item').removeClass('active');
	$(this).parent().addClass('active');

	let id = $(this).parent().attr('id');
	console.log(id);

	$('.card').removeClass('active');
	$(`#${id}_card`).addClass('active');
});

$('.header__img').click(function () {
	let id = $(this).parent().attr('id');
	console.log(id);
	playSound(id, true);
});

$('.card__img').click(function () {
	let id = $(this).parent().attr('id');
	let track = id.split('_')[2];
	id = id.split('_')[0];

	playSound(id, false, track);
});

function playSound(id, random, track) {
	for (let key in sound) {
		for (let i = 0; i < sound[key].length; i++) {
			sound[key][i].sound.pause();
			sound[key][i].sound.currentTime = 0;
		}
	}

	if (random) {
		sound[id][Math.floor(Math.random() * sound[id].length)].sound.play();
	} else {
		sound[id][track].sound.play();
	}
}