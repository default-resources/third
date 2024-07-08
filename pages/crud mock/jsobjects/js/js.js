export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		var abc = 0
		for (abc = 0; abc < 20 ; abc ++ ) {
			abc += 1;
		}
		return abc; 
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}