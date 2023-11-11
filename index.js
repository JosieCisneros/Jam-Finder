const form = document.getElementById("Finder")
const film = document.getElementById("film")
const character = document.getElementById("character")
const species = document.getElementById("species")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const search = (film.value)
    console.log(search)
    getFilms(search)
})

function getFilms(search) {
    return fetch ("https://swapi.dev/api/films/" + search)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        const characterLinks = data.characters
        characterLinks.forEach(element => {
            getCharacter(element) 
        });
    })
} 

function getCharacter(element) {
    return fetch(element)
    .then(res => res.json())
    .then(data => {
        const entry = document.createElement('li')
        entry.appendChild(document.createTextNode(data.name))
        character.appendChild(entry)
    })
}





