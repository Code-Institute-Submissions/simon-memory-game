# Simon Memory Game

A fully functional JavaScript implementation of the famous Simon Memory game.

## Demo

To view the project in action, visit the following link:

https://ezat-r.github.io/simon-memory-game/

## UX

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison. A sequence of lights and sounds is created and the user is required to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex.

### Mockups

Initial mockups were made using **Balsamiq** software to aid in the creation of the website; a basic mockup was made of each web page. 
- The mockups can be found in the **Mockups** folder. 

## Features

- **Testimonial** section - a section on the home page displays testimonials from 2 social network users; I took this idea from various other Game Landing Pages:
    - Each landing page for other apps had a review or testimonial section where positive messages were written for the app or product to entice users to sign up or download their app.

The game follows the same rules of the original Simon game. With a few exceptions, which are explained as follows:
- **Game Levels** - Usually in a traditional game of Simon, the levels are usually unlimited, however, I have decided to limit it to 20.
    - The reasoning behind this is that a modern user will quickly lose interest in the game if there are an unlimited number of levels. So to keep the user engaged and less likely to switch off the website, I have limited it to 20 levels.

- **Simon Game UI** - Traditional Simon boards had a circular base with 4 trapezoidal buttons which lighted up as each sequence was played back. I have tried to implement the same with my board design:
    - **Simon Base Shape** - The base shape of my Simon board is circular with a dark gray background. The center of the base game board traditionally had the Simon logo on it, however, I have used it as a Game Level indicator. 
    - **Simon Buttons** - Traditional Simon buttons had a trapezoidal shape. I tried to achieve this with the help of the *border-radius* CSS property. To simulate the lighting up of the Simon buttons, I have used a simple JavaScript *setTimeout* function which changes the background colour of the Simon buttons.

- **3 Consecutive Colour Rule** - Usually the Simon sequence is completely random, however, there are instances in the code where it allows for the same sequence i.e. Green button lighting up 4, 5 or more times in a row. In my game I have decided to implement a limit of 3 consecutive colours in a row.
    - To achieve this, I have implemented a check in the Javascript code which checks if there are 3 of the same colour in the Simon sequence; if there is then another colour is generated.

## Technologies Used

List of tools and technologies used in this project are as follows:

- [Bootstrap v3](https://getbootstrap.com/docs/3.3/)
    - The project uses **Bootstrap** to simplify the web page design and to maintain consistency across multiple browsers and screen resolutions.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to aid with the Bootstrap navigation; the navigation will not work without JQuery.
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
    - Vanilla JavaScript was used to code the Simon Game logic. I made use of *Event Listeners*, *setTimeout*, *Arrays* and various functions to achieve a working Simon game.
- [Jasmine](https://jasmine.github.io/)
    - The project uses **Jasmine** JavaScript framework to test various areas of the code which was written to make the Simon game work.
- [SASS](https://sass-lang.com/)
    - The project uses **SASS** as the CSS pre-processor to make writing CSS easier; features like partials, inheritance, mixins and variables were all used to make the CSS more easier to write as well as more maintainable.
- [Node-SASS](https://nodejs.org/en/) 
    - Node-sass which is a package within Node.js, was used to compile the SASS into CSS.
- [Font Awesome](https://getbootstrap.com/docs/3.3/)
    - The project uses **Font Awesome** to provide icons for the main navigation and social network links. 
- [VT323](https://fonts.googleapis.com/css?family=VT323)
    - The website uses **VT323** as the font for the Simon level indicator. 
- [Balsamiq](https://fonts.google.com/specimen/Roboto)
    - This tool was used to create the mockups of the website at the beginning of the project. 


## Game Logic

### Flow Charts

- Before I even thought about writing the JavaScript code which made the game work, I started by creating flow charts of the game logic; this made it easier to write the code later on as I had a clearer understanding of what I had to achieve.

The Flow Charts can be found in the following directory: **assets** > **game logic flow charts**

- I created 2 flow charts:
    - The first describes the flow of the Main Game logic.
    - The second describes the flow of how the *3 Consecutive Colour Rule* is achieved.

A description of the game logic and how the JavaScript is written to match it, is as follows:

#### Flow Chart 1 - Main Game Logic:

1. Once the User clicks the **Start** button, the game starts and the game flow is kicked into action.
    - In the Javascript code, an event listener is added onto the **Start** button and when it is clicked the *startGame* function is executed.
        - This makes the **Start** button disappear and makes the **Restart** button appear - this is achieved by manipulating the button elements' CSS classes.
        - Also, the Game level indicator is given an initial value of *01* to indicate Level 1.
        - Also, from this function the *addSimonSequence* function is called - see step 2 for the explanation of this.

2. The **addSimonSequence** function adds entries to the *simonSequence* Array - a maximum of 20 entries is achieved by using a *For* loop.
    - The **generateColour** function is called to generate and return a random colour:
        - With the help of the JavaScript *Math* library a random number between 1 - 4 is generated and this number is then used to return a random colour from the *gameColours* Array.
    - Before adding each entry, the **isUnique** function is called to enforce the *3 Consective Colour Rule* - see the description of the second flow chart for a more in-depth explanation of how this works.
    - Once 20 entries are added, the **playPattern** function is called:
        - This takes a parameter of an external counter; given a value of 0 initially.
        - A **setTimeout** function is used so that sufficient time is given to playing back each sequence back to the user.
            - As each sequence is played back so is the audio and the background changing animation of the relevant Simon button; to achieve this, the handler for each Simon button is called: *greenPad*, *redPad* etc.
        - The number of sequences which are played is dependent upon the current game level; if the current level is 1 then only one entry of the *simonSequence* array is played back to the user etc.

3. Once the sequence is played back to the user, then await input from the user.

4. As each input is applied from the user, the handler for each button is called:
    - Each of the Simon buttons have an event listener added onto them and each one has a function handler: **greenPad**, **redPad**, **yellowPad** and **bluePad**.
        - Once one of these functions is called, a **setTimeout** is used to apply the Simon button background change animation over a duration of 1.5 seconds. The audio beep of each button is also played back.
        - If it is the users turn (a boolean variable named *playerTurn* is used to determine this), then append the input to the *playerInput* Array and call the **checkInput** function.

5. Once a player input is applied, it is stored in the *playerInput* Array and the **checkInput** function is called:
    - Each input is checked against the *simonSequence* Array by calling a **correctInput** function and if any is wrong, then a Game Over message is shown to the user and the user is prompted to click the *Restart* button.
        - Clicking *Restart* calls the **resetGame** function which simply reloads the current page.
    - If the input is correct and number of inputs is not equal to the current game level and it is not the final level (20) then keep waiting for more Inputs from the user.
        - Otherwise if all inputs are correct and the number of inputs is equal to current game level then increment the *Level Indicator* by 1 and reset the *playerInput* Array and the **playPattern** function is called again to play the Simon sequence for the next level.
    - If it is the final level and all inputs are correct then display a Well Done message and prompt the user to click the *Restart* button to start the game again.

#### Flow Chart 2 - 3 Consecutive Colour Logic:

1. As a Simon sequence is created in the **addSimonSequence** function, the **isUnique** function is called before each colour is added to the *simonSequence* Array:
    - The **isUnique** function takes 2 parameters; the simonSequence array and the colour to be added. The last 3 entries of the Array is checked to see if they are the same as the colour to be added;
        - if they are the same, then a value of *false* is returned. The **addSimonSequence** will then generate another colour within a *While* loop and the **isUnique** function is called again until a colour which satisfies the 3 Consec Colour rule is added.
        - Otherwise a value of *true* is returned.
    - This process is repeated until 20 colours is added to the *simonSequence* Array.


## Testing

### Web UI Testing
Testing scenarios run:

1. Navigation:
    1. Click on all main navigation buttons i.e. 'Home' and 'Play'. Verify that each button takes you to the correct page.
    2. Click onto the 'Simon' brand name in the top-left of each page and verify that it takes you to the 'Home' page.

2. Pictures:
    1. Go to the "Home" page.
    2. Observe if all images display correctly.
    3. Observe images are positioned correctly i.e. no overlapping of images etc.
	4. Follow steps 2 - 3 again, however, this time for different screen sizes i.e. Phone, Tablet, Desktop etc.

4. Game-Play:
    1. Go to the "Play" page.
    2. Verify that a message is given to click the 'Start' button to start game.
    3. Verify that clicking the 'Start' button begins game.
    4. Applying *correct* input increments the level indicator by 1.
    5. Applying *incorrect* input displays a 'Game Over' message.

5. Typography:
	1. Go to the *Home* page.
	2. Have a look at the text and observe if all text is clearly visible i.e. is it too small, too big.
	3. Follow step 2 again, however, this time do the same for different screen sizes i.e. Phone, Tablet, Desktop etc.
	4. Follow steps 2 - 3 for all pages. Is the the typography consistent across all pages? Is it readable on small screen devices?

### Jasmine Tests

Jasmine Framework was used to test various snippets of the JavaScript code which were written to make the game work.

3 Areas of the code were tested:
- Simon Sequence generation testing:
    - The **generateColour** function is tested to make sure that it returns a value of *green*, *red*, *yellow* or *blue*;
        - This was done by using a Regular Expression pattern together with the Jasmine **toBe** matcher.
    - By using a Jasmine **Spy**, I wrote a test which checked that whilst the **addSimonSequence** function is being executed, that the **isUnique** function is called at least 20 times.
    - Another test ensured that after calling the **addSimonSequence** function, the *simonSequence* Array had 20 entries.
- 3 Consecutive Colour Rule testing:
    - The **isUnique** function was tested by applying various dummy values as the parameters and checking the result.
- User input checking against Simon sequence:
    - The **correctInput** function was tested by applying various dummy values as the parameters and checking the result.

#### Run Tests
- To run all tests, navigate into the **Tests** folder and run the *runTests.html* file.

#### View Test Suites
- To view test suites, navigate into the **Tests** folder and open the *simonSpec.js* file.

### Screen Size & Different Browsers

#### Screen Sizes

Using the Debugger tools on Google Chrome I was able to view the website in different screen sizes. The following screen sizes were verified:
- 360px X 640px (WxH)
- 768px X 1024px (WxH)
- 1024px X 1366px (WxH)

Test's were run for various screen sizes, these are listed in the above **Testing** section.

On smaller screen sizes i.e. when the width is 768px or less, the website switches to a stacked view to maintain a consistent look.

#### Multi Browser Testing

Multi browser testing was carried out to ensure there is consistency across different Browsers. The following Browsers were tested:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Internet Explorer v11

##### Small Screen Landscape Display Mode Limitation

- My Simon game is designed to be played in **Portrait** mode on small screen devices and does not run well in Lanscape mode on small screens. 
    - I have implemented some javascript which detects if the viewport is in *Landscape* mode and the viewport height is less than 550px, and if it is then it will display a message to let users know to switch to *Portrait* mode.
        - The only limitation of this is that the check is only made on reloading the page, so if the user loads the page in Portrait mode and then switches to Landscape mode, then it will not display anything.

## Deployment

The website was deployed using GitHub pages. Deployment process which was followed is given below:

1. Login to GitHub.
2. Navigate to the repo i.e. https://github.com/ezat-r/simon-memory-game
3. Click onto the **Settings** button.
4. Scroll down to the **GitHub Pages** section.
5. In the **GitHub Pages** section, click onto the *Source* drop-down and select **master branch**.
6. Then, click **Save** button.
7. GitHub will then go ahead and publish the project and provide a link to the deployment i.e. https://ezat-r.github.io/simon-memory-game/ 
8. Project has now been successfully deployed.

## Credits

### Content
- Information on the Simon Memory Game was obtained from [Wikipedia Article](https://en.wikipedia.org/wiki/Simon_(game))

### Media
- Picture of male & female on home page were obtained from the following Royalty Free Website: https://www.pexels.com/royalty-free-images/
- Simon game music was obtained from the following Royalty Free Website: http://soundbible.com/