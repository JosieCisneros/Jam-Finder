Star Wars Character Finder

User Description 
This application allows the user to search through six star wars films in order to pull character names from that movie and display them in a list.
Each individual name is able to be clicked on in order to display each individual character data featuring their gender, eye color and birth year.

Design Description
This application has a simplistic design featuring a galaxy background image (pc: Bryan Goff) with a title and a basic form.

The form features a dropdown menu where the user can select from six Star Wars films and click the “submit” button to find character names and display them in a list.

All text in the body is white in order to contrast against the background except when the list text is hovered over in which it displays blue (displayed through javascript).

Functionality Description
This application uses javascript for all functions of the page. This application features event listeners that run functions when the submit button is clicked, when the character names are hovered over to turn them blue and back to white and to run a function when the character name is clicked to display the character bio information.

This application also features three different functions; getFilms, getCharacter and getBio.

getFilms fetches data from an api then returns the “characters” data. It then calls on the other two functions for each character (element) in the movie to get their character data and their bio data.

![alt text]("images/film.png")

getCharacter uses (element) to fetch the data about the character and then appends the characters name to a list item with the characters name. This function also uses two event listeners to change the style color to blue with a (mouseover) event and changes the style color to white with a (mouseout) event. A third event listener is added in this function that unhides the bio information when a name is clicked.

![alt text]("images/character.png")

getBio uses (element) to fetch the data about the characters bio information (gender, eye color and birth year) and then creates a list item with the bio data to then append it to the character element. This function also hides the bio list initially and sets the bio data to a specific bio character’s name. 

![alt text]("images/bio.png")



