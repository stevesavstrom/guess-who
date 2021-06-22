# jQuery Guess Who

## Description
A pick-the-person game with HTML, CSS, and jQuery!
- Displays random name.
- Randomizes and displays profile photos.
- Allows players to guess by clicking on profile photos.
- Players are given a success or error message on each click.

## Screen Shot
![Screen Shot](/screenshot.png)

## Display Profile Pictures
[X] On document load, append divs for each person in the `data.js` file to the DOM with jQuery (not hardcoded), each containing an image from each GitHub profile (see the provided data.js file). As an example, the below HTML would produce Chris's GitHub profile picture where `christopher-black` is Chris's GitHub username and `250` is the size of the picture requested.

```HTML
<img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris">
```

## Start the Game

[X] Prompt the player to pick one of the people by displaying a randomly selected name.

Here is a handy function to generate a random number given a minimum and maximum.

```JavaScript
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
```

## Game Logic

[X] If the player clicks on the correct person
    - give them a success message.
    - Prompt the player to pick another person randomly and let them keep playing.
    
[X] If they pick the wrong person
    - give them an error message.
    - allow them to try again.

![example.gif](example.gif)

## Stretch Goals

[ ] When the player clicks on the correct person, add a visual cue that indicates that they picked the correct person. Then change it back after 2 seconds and resume the game. You'll need to use the [built in `setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) function for the timing. This function waits a given amount of time and then calls a function you specify.

[X] Add some jQuery effects, animations and styling to your game! There are quite a few built in. [See the Docs!](https://api.jquery.com/category/effects/)

[X] Randomize the array of images before displaying them on the page to make the game more challenging.