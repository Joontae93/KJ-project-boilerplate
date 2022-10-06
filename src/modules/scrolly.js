import scrollama from 'scrollama';
import { select } from './utilities';

export function scrollytelling() {
	const main = select('main');
	const button = select('.btn');
	main.style.opacity = 0;
	main.style.display = 'none';
	document.addEventListener('click', (ev) => {
		if (ev.target != button) return;
		main.style.opacity = 1;
		main.style.display = 'grid';
		button.style.opacity = 0;
		button.style.display = 'none';
		prayerWalk();
	});
}
const urls = [
	'https://firstchurch.net/wp-content/uploads/2022/10/P1020081-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/P1020081-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/P1020081-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/P1020081-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/fellowship-hall-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/kids-checkin-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/youth-gather-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/classrooms-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/church-office-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/P1020081-scaled.jpg',
	'https://firstchurch.net/wp-content/uploads/2022/10/sanctuary-scaled.jpg',
];
/** Set Up Scrollama */
function prayerWalk() {
	const scroller = scrollama();
	scroller.setup({
		step: '.station',
		offset: 0.5,
		progress: true,
		threshold: 10,
	});
	scroller.onStepProgress(displayStation);
	scroller.onStepExit(hideStation);
}

/** Displays Prayer Stations
 * @param {object} data the Scrollama Info
 */
function displayStation(data) {
	const stations = select('.station', true);
	const image = select('.image');
	stations.forEach((el, i) => {
		if (i === data.index) {
			image.src = urls[i];
			image.style.opacity = 1;
			image.style.transform = `rotateY(${
				(parseInt(data.progress * 100) - 30) * 0.4
			}deg)`;
		}
	});
}
/** Hides Prayer Stations on Exit
 * @param {object} data the Scrollama Info
 */
function hideStation(data) {
	const stations = select('.station', true);
	const image = select('.image');
	stations.forEach((el, i) => {
		if (i === data.index) {
			image.style.opacity = 0;
		}
	});
}
