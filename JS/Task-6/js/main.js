window.addEventListener('load', function () {

	let posts = document.getElementById('posts'),
		users = document.getElementById('users'),
		main = document.getElementById("main");

	let counterPost = 16;

	displayPosts = (count = 8) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => {
				let jsonLength = json.length;
				let removeArr = json.splice(0, count);

				while (main.firstChild) {
					main.removeChild(main.firstChild);
				}
				removeArr.forEach((item, index) => {
					let div = document.createElement("div");
					div.userId = item.userId;
					div.id = `post${item.id}`;
					div.classList.add("post");
					let h2 = document.createElement("h2");
					h2.appendChild(document.createTextNode(item.title));
					div.addEventListener("click", postInfo);
					let p = document.createElement("p");
					p.appendChild(document.createTextNode(item.body));
					main.appendChild(div);
					div.appendChild(h2);
					div.appendChild(p);
					window.history.pushState({ page: 100 }, "title 1", ' ');
				})

				if (count < jsonLength) {
					let btn = document.createElement("button");
					btn.addEventListener("click", showMorePosts);
					btn.appendChild(document.createTextNode("Show more"));
					main.appendChild(btn);
				}

				window.history.pushState({ page: 100 }, "title 1", ' ');
			})
	}

	const showMorePosts = () => {
		displayPosts(counterPost);
		counterPost = counterPost + 8;
	}

	const postInfo = (e) => {
		e.preventDefault();
		let buf;

		while (main.firstChild) {
			if (main.firstChild.id === e.target.parentNode.id) {
				buf = main.firstChild;

				const result = [];

				const params = new URLSearchParams(location.search);
				params.set('page', buf.id.slice(4));
				console.log(buf.id.slice(4));
				result.push({
					link: `${location.pathname}?${params}`,
				});

				let state = { 'page_id': buf.id }
				window.history.pushState(state, '', `${location.pathname}?${params}`);
				console.log(result);

			}
			main.removeChild(main.firstChild);
		}
		main.appendChild(buf);

		fetch('https://jsonplaceholder.typicode.com/comments')
			.then(response => response.json())
			.then(json => {
				let divComments = document.createElement("div");
				divComments.classList.add("comments");
				let comments = json.filter((item, index) => {
					return `post${item.postId}` == e.target.parentNode.id;
				});
				comments.forEach((item, index) => {
					let div = document.createElement("div");
					div.classList.add("comment");

					let name = document.createElement("div");
					name.appendChild(document.createTextNode(item.name));
					name.classList.add("comment-name");
					let email = document.createElement("div");
					email.appendChild(document.createTextNode(item.email));
					email.classList.add("comment-email");
					let text = document.createElement("div");
					text.appendChild(document.createTextNode(item.body));
					text.classList.add("comment-body");

					divComments.appendChild(div);
					div.appendChild(name);
					div.appendChild(email);
					div.appendChild(text);

				})
				main.appendChild(divComments);
			})
	}


	const displayUsers = () => {
		while (main.firstChild) {
			main.removeChild(main.firstChild);
		}

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => {
				let divUsers = document.createElement("div");
				divUsers.classList.add("users");

				json.forEach((item, index) => {
					let div = document.createElement("div");
					div.classList.add("user");

					let name = document.createElement("div");
					name.appendChild(document.createTextNode(item.name));
					name.classList.add("user-name");
					let email = document.createElement("div");
					email.appendChild(document.createTextNode(item.email));
					email.classList.add("user-email");
					let username = document.createElement("div");
					username.appendChild(document.createTextNode(item.username));
					username.classList.add("user-username");
					let address = document.createElement("div");
					address.appendChild(document.createTextNode(`City: ${item.address.city}, street: ${item.address.street}, suite: ${item.address.suite}`));
					address.classList.add("user-address");

					div.appendChild(name);
					div.appendChild(email);
					div.appendChild(username);
					div.appendChild(address);

					divUsers.appendChild(div);
				})

				main.appendChild(divUsers);
			})
	}
	posts.addEventListener('click', function () { displayPosts() });
	users.addEventListener('click', function () { displayUsers() });
});

