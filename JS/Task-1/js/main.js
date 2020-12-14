function* fibonacci() {
	[a, b] = [0, 1]
	while (true) {
		yield a;
		[a, b] = [b, a + b]
	}
}

const fib = fibonacci();

for (let i = 0; i < 10; i++) {
	console.log(fib.next().value);
}

// Example from the lesson 

function Fibo() {
	const f = (function* () {
		const A = [0, 1];
		let forward = true;
		for (; true;) {
			const flag = yield A[0];
			if (flag === true || flag === false) {
				forward = flag;
			}
			if (forward) {
				const next = A[0] + A[1];
				A.push(next);
				A.shift();
			} else {
				const prev = A[1] - A[0];
				A.unshift(prev);
				A.pop();
			}
		}
	})();
	const one = (flag) => f.next(flag).value;
	return (amount, flag) => {
		// return [ ...Array(amount) ].map( _ => one( flag ) );
		const result = [];
		for (let i = 0; i < amount; i++) {
			result.push(one(flag));
		}
		return result;
	}
}

const f1 = Fibo();
for (let i = 1, f = true; i < 15; i++) {
	if (i == 4) f = false;
	console.log(f1(i, f));
}
