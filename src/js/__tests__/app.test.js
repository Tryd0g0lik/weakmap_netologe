import ErrorRepository from "../app";

test("test 1001", () => {
	const err = new ErrorRepository([[1001, "1001 текстовое описание"],
	[1002, "1002 текстовое описание"],
	[1003, "1003 текстовое описание"]]);
	// expect(err.translate(1001)).toBe("1001 текстовое описание")
	expect(err.translate(1002)).toBe("1002 текстовое описание");
});

test("test 12", () => {
	const err = new ErrorRepository([[1001, "1001 текстовое описание"],
	[1002, "1002 текстовое описание"],
	[1003, "1003 текстовое описание"]]);
	// expect(err.translate(1001)).toBe("1001 текстовое описание")
	expect(err.translate(1002)).toBe("Your command was not found");
});