const mediaQuery = window.matchMedia("(max-width: 767px)");

// Функция, которая будет вызываться, когда ширина экрана <= 768px
function handleMobileView() {
	console.log("Мобильная версия");
	// Вызовите здесь нужную функцию для мобильной версии
	mobileFunction();
}

// Функция, которая будет вызываться, когда ширина экрана > 768px
function handleDesktopView() {
	console.log("Десктопная версия");
	// Вызовите здесь нужную функцию для десктопной версии
	desktopFunction();
}

// Основная функция для проверки медиа-запроса и выполнения условий
function handleScreenChange(e) {
	if (e.matches) {
		// Если ширина экрана <= 768px (мобильное устройство)
		handleMobileView();
	} else {
		// Если ширина экрана > 768px (десктоп)
		handleDesktopView();
	}
}

// Вызываем функцию при загрузке страницы
handleScreenChange(mediaQuery);

// Добавляем слушатель событий на изменения ширины экрана
mediaQuery.addEventListener("change", handleScreenChange);

// Пример функций для мобильной и десктопной версий
function mobileFunction() {
	console.log("Функция для мобильной версии выполняется.");
	var swiper = new Swiper(".mySwiper", {
		effect: "cards",
		grabCursor: true,
		direction: "vertical",
	});
	// Ваш код для мобильного устройства
}

function desktopFunction() {
	console.log("Функция для десктопной версии выполняется.");
	// Ваш код для десктопа
}

// Функция прокрутки к элементу
const featuresId = window.matchMedia("(max-width: 768px)").matches ? 'features-mobile' : 'features-pc';

document.getElementById(featuresId).addEventListener('click', function () {
	const targetElement = document.getElementById('features2');
	const headerHeight = document.querySelector('header').clientHeight;
	const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

	window.scrollTo({
		top: targetPosition,
		behavior: 'smooth'
	});
});

const pricingId = window.matchMedia("(max-width: 768px)").matches ? 'pricing-mobile' : 'pricing-pc';

document.getElementById(pricingId).addEventListener('click', function () {
	const targetElement = document.getElementById('pricing2');
	const headerHeight = document.querySelector('header').clientHeight;
	const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

	window.scrollTo({
		top: targetPosition,
		behavior: 'smooth'
	});
});

const supportId = window.matchMedia("(max-width: 768px)").matches ? 'support-mobile' : 'support-pc';

document.getElementById(supportId).addEventListener('click', function () {
	const targetElement = document.getElementById('support2');
	const headerHeight = document.querySelector('header').clientHeight;
	const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

	window.scrollTo({
		top: targetPosition,
		behavior: 'smooth'
	});
});

//Код для свитчера

function activateButton(buttonId) {
	const monthlyButton = document.getElementById('monthly');
	const yearlyButton = document.getElementById('yearly');
	const monthlyInfo = document.getElementById('monthlyInfo');
	const yearlyInfo = document.getElementById('yearlyInfo');

	if (buttonId === 'monthly') {
		monthlyButton.classList.add('active', 'text-[#f8f8f8]', 'font-bold');
		monthlyButton.classList.remove('text-[#3D247A]', 'font-normal');
		yearlyButton.classList.remove('active', 'text-[#f8f8f8]', 'font-bold');
		yearlyButton.classList.add('text-[#3D247A]', 'font-normal');

		// Показать информацию о месячном плане
		monthlyInfo.classList.remove('hidden');
		yearlyInfo.classList.add('hidden');
	} else {
		yearlyButton.classList.add('active', 'text-[#f8f8f8]', 'font-bold');
		yearlyButton.classList.remove('text-[#3D247A]', 'font-normal');
		monthlyButton.classList.remove('active', 'text-[#f8f8f8]', 'font-bold');
		monthlyButton.classList.add('text-[#3D247A]', 'font-normal');

		// Показать информацию о годовом плане
		yearlyInfo.classList.remove('hidden');
		monthlyInfo.classList.add('hidden');
	}
}

function alignCards() {
	// Проверяем, больше ли ширина окна 1024 пикселей
	if (window.innerWidth > 1023) {
		// Получаем все карточки
		const cards = document.querySelectorAll('.card');
		const prices = document.querySelectorAll('.price');

		// Сбрасываем высоту карточек и блоков с ценой перед вычислением
		cards.forEach(card => card.style.height = 'auto');
		prices.forEach(price => price.style.marginTop = '0px');

		// Выравнивание по высоте карточек
		let maxCardHeight = 0;
		cards.forEach(card => {
			if (card.offsetHeight > maxCardHeight) {
				maxCardHeight = card.offsetHeight;
			}
		});
		cards.forEach(card => card.style.height = maxCardHeight + 'px');

		// Выравнивание блоков с ценой
		let maxPriceTop = 0;
		prices.forEach(price => {
			const topOffset = price.getBoundingClientRect().top;
			if (topOffset > maxPriceTop) {
				maxPriceTop = topOffset;
			}
		});
		prices.forEach(price => {
			const currentTop = price.getBoundingClientRect().top;
			price.style.marginTop = (maxPriceTop - currentTop) + 'px';
		});
	}
}

// Запуск выравнивания при загрузке страницы
window.addEventListener('load', alignCards);

// Запуск выравнивания при нажатии на кнопки
document.getElementById('monthly').addEventListener('click', alignCards);
document.getElementById('yearly').addEventListener('click', alignCards);

// Запуск выравнивания при изменении размера окна
window.addEventListener('resize', alignCards);

// Запуск выравнивания при загрузке страницы
window.addEventListener('load', alignCards);

// Запуск выравнивания при нажатии на кнопки
document.getElementById('monthly').addEventListener('click', alignCards);
document.getElementById('yearly').addEventListener('click', alignCards);

// Контроль ширины 
document.addEventListener('DOMContentLoaded', () => {
	const listItems = document.querySelectorAll('.list');

	// Определяем максимальную ширину
	let maxWidth = 0;
	listItems.forEach(item => {
		const itemWidth = item.offsetWidth;
		if (itemWidth > maxWidth) {
			maxWidth = itemWidth;
		}
	});

	// Устанавливаем всем элементам ширину, равную максимальной
	listItems.forEach(item => {
		item.style.width = maxWidth + 'px';
	});
});

//Список часто задаваемых вопросов
function toggleFaq(element) {
	const answer = element.nextElementSibling;
	const toggleBtn = element.querySelector(".toggle-btn");

	// SVG icons for plus and minus
	const plusIcon = `
		 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
			  <path d="M0 10.2651C0 9.71285 0.447715 9.26514 1 9.26514H8.58929C8.81612 9.26514 9 9.08125 9 8.85442V1.64014C9 1.08785 9.44771 0.640137 10 0.640137C10.5523 0.640137 11 1.08785 11 1.64014V8.85442C11 9.08125 11.1839 9.26514 11.4107 9.26514H19C19.5523 9.26514 20 9.71285 20 10.2651C20 10.8174 19.5523 11.2651 19 11.2651H11.3985C11.1784 11.2651 11 11.4436 11 11.6637V18.6365C11 19.1889 10.5521 19.6367 9.99963 19.6365C9.44749 19.6363 9 19.1886 9 18.6365V11.6639C9 11.4437 8.82147 11.2651 8.60124 11.2651H1C0.447715 11.2651 0 10.8174 0 10.2651Z" fill="#F4ECFF"/>
		 </svg>`;
	const minusIcon = `
		 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3" viewBox="0 0 20 3" fill="none">
			  <path d="M0 1.13867C0 0.586387 0.447715 0.138672 1 0.138672H19C19.5523 0.138672 20 0.586387 20 1.13867C20 1.69096 19.5523 2.13867 19 2.13867H1C0.447715 2.13867 0 1.69096 0 1.13867Z" fill="#F4ECFF"/>
		 </svg>`;

	// Close all other FAQ items except the clicked one
	document.querySelectorAll(".faq-answer").forEach(el => {
		if (el !== answer) {
			el.classList.add("hidden", "opacity-0", "-translate-y-4");
			el.classList.remove("translate-y-0", "opacity-100");
			el.previousElementSibling.querySelector(".toggle-btn").innerHTML = plusIcon;
			el.previousElementSibling.querySelector(".toggle-btn").classList.remove("rotate-180");
		}
	});

	// Toggle the current item
	if (answer.classList.contains("hidden")) {
		answer.classList.remove("hidden");
		setTimeout(() => {
			answer.classList.remove("opacity-0", "-translate-y-4");
			answer.classList.add("translate-y-0", "opacity-100");
		}, 10); // Small delay to trigger the transition
		toggleBtn.innerHTML = minusIcon;
		toggleBtn.classList.add("rotate-180");
	} else {
		answer.classList.add("opacity-0", "-translate-y-4");
		answer.classList.remove("translate-y-0", "opacity-100");
		setTimeout(() => answer.classList.add("hidden"), 300); // Delay hiding until animation completes
		toggleBtn.innerHTML = plusIcon;
		toggleBtn.classList.remove("rotate-180");
	}
}

//Анимация квадратов бэкграунда 
const gridElement = document.getElementById('grid');
let squares = []; // массив квадратов
let minActiveSquares; // минимальное количество активных квадратов
let maxActiveSquares; // максимальное количество активных квадратов
let animationInterval;

// Функция для создания сетки
function createGrid() {
	// Очистить текущую сетку, если она уже есть
	gridElement.innerHTML = '';
	squares = [];

	// Вычисляем количество столбцов и строк, которые помещаются в текущей ширине и фиксированной высоте
	const columnCount = Math.floor((window.innerWidth + 80) / 40); // ширина каждого квадрата — 40px
	const rowCount = Math.floor(400 / 40); // количество строк, чтобы уложиться в 400px высоты

	minActiveSquares = Math.floor(columnCount * rowCount * 0.7); // 70% активных квадратов
	maxActiveSquares = Math.floor(columnCount * rowCount * 0.9); // 90% активных квадратов

	// Устанавливаем стиль сетки
	gridElement.style.gridTemplateColumns = `repeat(${columnCount}, 40px)`;
	gridElement.style.gridTemplateRows = `repeat(${rowCount}, 40px)`;

	// Создаем квадраты
	for (let i = 0; i < columnCount * rowCount; i++) {
		const square = document.createElement('div');
		square.classList.add('square', 'bg-[#4700ED33]', 'opacity-0', 'transition-opacity', 'duration-[2000ms]');
		gridElement.appendChild(square);
		squares.push(square);
	}
}

// Функция для активации квадратов
function activateSquares() {
	const activeSquares = squares.filter(square => square.classList.contains('square-active'));

	// Если количество активных квадратов меньше минимального, активируем случайный квадрат
	if (activeSquares.length < minActiveSquares) {
		const inactiveSquares = squares.filter(square => !square.classList.contains('square-active'));
		const randomSquare = inactiveSquares[Math.floor(Math.random() * inactiveSquares.length)];

		if (randomSquare) {
			randomSquare.classList.add('square-active', 'opacity-80');
			setTimeout(() => {
				randomSquare.classList.remove('square-active', 'opacity-80');
			}, Math.random() * 4000 + 2000); // Квадрат будет активен от 2 до 4 секунд
		}
	}

	// Если количество активных квадратов меньше максимального, активируем новый случайный квадрат
	else if (activeSquares.length < maxActiveSquares) {
		const randomIndex = Math.floor(Math.random() * squares.length);
		const square = squares[randomIndex];

		if (!square.classList.contains('square-active')) {
			square.classList.add('square-active', 'opacity-80');
			setTimeout(() => {
				square.classList.remove('square-active', 'opacity-80');
			}, Math.random() * 4000 + 2000);
		}
	}
}

// Функция для запуска анимации
function startAnimation() {
	createGrid();
	if (animationInterval) clearInterval(animationInterval); // Очищаем предыдущий интервал
	animationInterval = setInterval(activateSquares, 75); // Частота появления новых квадратов
}

// Перезапускаем анимацию при изменении ширины экрана
window.addEventListener('resize', startAnimation);

// Инициализация анимации при загрузке страницы
startAnimation();