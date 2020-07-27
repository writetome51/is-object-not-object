// Returns true if `arg` is array or object.
// Does not consider null an object.

export function isObject(arg) {
	return !(arg === null || typeof arg !== 'object');
}

export function notObject(arg) {
	return !(isObject(arg));
}
