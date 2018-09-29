let button = document.querySelector('button');
let input = document.querySelector('input');

const { fromEvent } = Rx.Observable;

fromEvent(input, 'keyup')
	.subscribe( (e)=> console.log(e));


fromEvent(button, 'click')
	.subscribe( (e)=> console.log(e));

fromEvent(document, 'mousemove').
	subscribe( (e)=> {
		document.querySelector('h1').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
	})