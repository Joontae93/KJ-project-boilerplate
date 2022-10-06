import '../sass/main.scss';
import { scrollytelling } from './modules/scrolly';
import { myCopyright } from './modules/utilities';

function init() {
	console.log(`Let's get to building!`);
	myCopyright();
	scrollytelling();
}
init();
