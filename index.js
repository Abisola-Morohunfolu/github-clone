const searchInput = document.querySelector('.search');
const searchInputContainer = document.querySelector('.search__input-container');
const testButton = document.querySelector('.active-tab');

const onInputFocus = () => searchInputContainer.classList.add('enlarge');
const onInputBlur = () => searchInputContainer.classList.remove('enlarge');

const fetchData = async () => {
	console.log('funtion called!');
	let content = {
		query: `{
            repositoryOwner(login: "Abisola-Morohunfolu") {
              repositories(first: 20) {
                nodes{
                   createdAt
                }
              }
            }
          }`,
	};

	let body = JSON.stringify(content);

	fetch('https://api.github.com/graphql', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body,
	})
		.then((response) => response.json())
		.then((data) => console.log(data));
};

testButton.addEventListener('click', fetchData);
