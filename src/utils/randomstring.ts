export function getRandomstring(
	length: number = 16,
	readable: boolean = false,
	charset: string[] = ["alphanumeric"],
	capitalization: null | string = null,
): string {
	const randomstring = require("randomstring");

	return randomstring.generate({
	  length,
	  readable,
	  charset,
	  capitalization
	});
}