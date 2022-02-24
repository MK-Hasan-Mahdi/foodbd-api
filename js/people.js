const loadPeople = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayPeople(data))
}

const displayPeople = (data) => {
    const peoples = data.results;
    console.log(data)
    const peopleDiv = document.getElementById('people');
    for (const people of peoples) {
        // console.log(people.name.first, people.name.last)
        const p = document.createElement('p');
        p.innerText = `Gender: ${people.gender} Name:${people.name.title} ${people.name.first} ${people.name.last} Email: ${people.email}`;
        peopleDiv.appendChild(p);
    }
}