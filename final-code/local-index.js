const dogs = [
    // { name: 'Azure' },
    // { name: 'Sammy' },
    // { name: 'Roscoe' },
]

async function loadDogs() {
    const response = await fetch('/api/dogs');
    const body = await response.json();
    for (let dog of body.dogs) {
        dogs.push(dog);
    }
}

function displayDogs() {
    for (let dog of dogs) {
        const dogUI = document.createElement('li');
        dogUI.className = 'list-group-item';
        dogUI.innerText = dog.name;

        document.getElementById('dogs-list').appendChild(dogUI);
    }
}

async function main() {
    displayDogs();
}

main();