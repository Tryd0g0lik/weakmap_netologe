export default class ErrorRepository {
	constructor(data) {
		this.map = new Map(data);
	}

	translate(code) {
		return this.map.get(code);
	}
}

// const myErr = new ErrorRepository([[1001, "1001 текстовое описание"],
// [1002, "1002 текстовое описание"],
// [1003, "1003 текстовое описание"]]);
// console.log(myErr.translate(1002));
