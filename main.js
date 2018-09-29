function createSubscribe(name) {
	return {
		next(x) {
			console.log(name,': ', x)	
		},
		error(err){
			console.log('Error : ', x)	
		},
		complete() {
			console.log(name, 'complited!')	
		}
	}
}


// Function - of

/*Rx.Observable.of(5, '0', 4, 'string')
	.subscribe(createSubscribe('of') );*/
		

// Creating interval :

/*Rx.Observable.interval(500)
	.take(15)
	.subscribe(createSubscribe('interval'));*/

// Creating timer :


/*Rx.Observable.timer(4000,500)
	.take(10)
	.subscribe(createSubscribe('timer'));*/


// Creating range: 

Rx.Observable.range(3,6)
	.subscribe(createSubscribe('timer'));
