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
function displayStation(data) {
	const stations = select('.station', true);
	const images = select('.image', true);
	images.forEach((el) => (el.style.opacity = 0));
	stations.forEach((el, i) => {
		if (i === data.index) {
			const image = images[i];
			image.style.opacity = 1;
			image.style.transform = `rotateY(${
				(parseInt(data.progress * 100) - 30) * 0.4
			}deg)`;
		}
	});
}

function hideStation(data) {
	const stations = select('.station', true);
	const image = select('.image');
	stations.forEach((el, i) => {
		if (i === data.index) {
			image.style.opacity = 0;
		}
	});
}
