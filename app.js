const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const btn = document.querySelector('button');

function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const rr = Math.floor(Math.random() * 256);
	const gg = Math.floor(Math.random() * 256);
	const bb = Math.floor(Math.random() * 256);
	color1.value = hex(r, b, g);
	color2.value = hex(rr, bb, gg);
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ';';
}

function hex(r, g, b) {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function gradientProp() {
	body.style.background = `linear-gradient(to right,  ${color1.value}  ,  ${color2.value} )`;
	css.textContent = body.style.background + ';';
}

function setGradient() {
	gradientProp();
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
btn.addEventListener('click', randomColor);
gradientProp();
