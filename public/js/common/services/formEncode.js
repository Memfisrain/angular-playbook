export default function() {
	return formEncode;
};

function formEncode(data) {
	return Object
		.keys(data)
		.reduce((curr, next, i, arr) => {
			return `${curr}&${next}=${encodeURIComponent(data[next])}`
		}, '')
		.slice(1);
}