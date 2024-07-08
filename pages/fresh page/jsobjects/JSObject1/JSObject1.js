export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		return "foo " + appsmith.user.email
	},
	async myFun2 () {
		return manual_query.data
	}
}