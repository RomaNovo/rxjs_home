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


const arr = [
	{
		id: 1,
		name: 'wfm1'
	},
	{
		id: 2,
		name: 'wfm2'
	}
]

/*Rx.Observable.from(arr)
	.subscribe( createSubscribe('from'));*/

// Creating SET

/*const set = new Set([1,2,3,'4','5', {id:5}]);


Rx.Observable.from(set)
	.subscribe( createSubscribe('set'));*/

// Creating Map

const map = new Map([[1,3],[4,4],[11,11]]);

Rx.Observable.from(map)
	.subscribe( createSubscribe('map'));





