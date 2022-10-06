import scrollama from 'scrollama';
import { select } from './utilities';

export function scrollytelling() {
	const main = select('main');
	const button = select('.btn');
	main.style.opacity = 0;
	document.addEventListener('click', (ev) => {
		if (ev.target != button) return;
		main.style.opacity = 1;
		button.style.opacity = 0;
		button.style.display = 'none';
		prayerWalk();
	});
}
function prayerWalk() {
	const scroller = scrollama();
	scroller.setup({ step: '.station', offset: 0.5 });
	scroller.onStepEnter(displayStation);
}
function displayStation(data) {
	const stations = select('.station', true);
	const image = select('.image');
	stations.forEach((el, i) => {
		if (i === data.index) {
			const title = el.querySelector('.station__title').innerText;
			image.innerHTML = title;
		}
	});
}
