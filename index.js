const form = document.getElementById("Finder")
const film = document.getElementById("film")
const character = document.getElementById("character")
const bio = document.getElementById("characterBio")

//every time the submit button is clicked
form.addEventListener("submit", (e) => {
    e.preventDefault()
    //search is equal to user input
    const search = (film.value)
    console.log(search)
    //empties the list of characters
    character.innerHTML = ""
    //pass the user input to get films
    getFilms(search) 
})

//fetches selected movie data
function getFilms(search) {
    return fetch ("https://swapi.dev/api/films/" + search)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        //characterLinks is a list of every character in the movie
        const characterLinks = data.characters
        //for every character in the movie get their character data and bio data
        characterLinks.forEach(element => {
            getCharacter(element) 
            getBio(element)
        }) 
    })
} 

//uses a characterLink to fetch data about character
//appends the characters name to the list
function getCharacter(element) {
    return fetch(element)
    .then(res => res.json())
    .then(data => {
        //creates a list item with the characters name 
        const entry = document.createElement('li')
        entry.appendChild(document.createTextNode(data.name))
        //add an id that is equal to the characters name
        entry.setAttribute("id", data.name)

        const nameList = character.appendChild(entry)
        const names = [nameList] 

        nameList.addEventListener("mouseover", function handleMouseOver(){
            names.forEach(element => {
                element.style.color = 'blue'
            });
        })
        nameList.addEventListener("mouseout", function handleMouseOver(){
            names.forEach(element => {
                element.style.color = 'white'
            })
        })
        //when name is clicked unhide the bio
        entry.addEventListener("click", function handleClick(){
            console.log(data.name + "_bio")
            document.getElementById(data.name + "_bio").style.display = "block"
        })
    }) 
}

//uses characterLinks to fetch bio data about the character
function getBio(element) {
    return fetch(element)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        //creates a list item with bio data
        const bioList = document.createElement('li')
        bioList.appendChild(document.createTextNode([
            "Gender: " + data.gender, " Eye Color: " + data.eye_color, " Birth Year: " + data.birth_year]))
        //gets character name element by id
        const characterElement = document.getElementById(data.name)
        //hide the bio list
        bioList.style.display = "none"
        //sets the bio to the specific bio characters name
        bioList.setAttribute("id", data.name + "_bio")
        console.log(characterElement)
        //append the bio to the character element
        characterElement.appendChild(bioList)
    })
}
