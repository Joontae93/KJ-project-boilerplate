import scrollama from 'scrollama';
import { select } from './utilities';
export function scrollytelling() {
	const scroller = scrollama();
	scroller.setup({ step: '.station', offset: 0.5 });
	scroller.onStepEnter(displayStation);
}
function displayStation(data) {
	console.log(data);
	const stations = select('.station', true);
	const image = select('.image');
	stations.forEach((el, i) => {
		if (i === data.index) {
			const title = el.querySelector('.station__title').innerText;
			image.innerHTML = title;
		}
	});
}
