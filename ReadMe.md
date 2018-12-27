# Simon Memory Game

A fully functional JavaScript implementation of the famour Simon Memory game.

## Demo

To view the project in action, visit the following link:

https://ezat-r.github.io/simon-memory-game/

## UX

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison. A sequence of lights and sounds is created and the user is required to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex.

### Mockups

Initial mockups were made using **Balsamiq** software to aid in the creation of the website; a basic mockup was made of each web page. 
- The mockups can be found in the **Mockups** folder. 

## Features
- Testimonial section - a section on the home page displays testimonials from 2 social network users. 
- Game play - Simon memory game has a maximum of 20 levels - each level on the way to 20 gets progressively harder. 

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Bootstrap v3](https://getbootstrap.com/docs/3.3/)
    - The project uses **Bootstrap** to simplify the web page design and to maintain consistency across multiple browsers and screen resolutions.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to aid with the Bootstrap navigation; the navigation will not work without JQuery.
- [Jasmine](https://jasmine.github.io/)
    - The project uses **Jasmine** JavaScript framework to test various areas of the code which was written to make the Simon game work.
- [SASS](https://sass-lang.com/)
    - The project uses **SASS** as the CSS pre-processor to make writing CSS easier; features like inheritance, mixins and variables were all used to make the CSS more easier to write as well as more maintainable.
- [Font Awesome](https://getbootstrap.com/docs/3.3/)
    - The project uses **Font Awesome** to provide icons for the 'OUR SOCIALS' links. 
- [VT323](https://fonts.googleapis.com/css?family=VT323)
    - The website uses **VT323** as the font for the Simon level indicator. 
- [Balsamiq](https://fonts.google.com/specimen/Roboto)
    - This tool was used to create the mockups of the website at the beginning of the project. 

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
    3. Verify that clicking the 'Start' begins game.
    4. Applying *correct* input increments the level indicator by 1.
    5. Apply *incorrect* input displays a 'Game Over' message.

5. Typography:
	1. Go to the *Home* page.
	2. Have a look at the text and observe if all text is clearly visible i.e. is it too small, too big.
	3. Follow step 2 again, however, this time do the same for different screen sizes i.e. Phone, Tablet, Desktop etc.
	4. Follow steps 2 - 3 for all pages. Is the the typography consistent across all pages? Is it readable on small screen devices?

### Jasmine Unit Tests

Jasmine was used to test various snippets of the JavaScript which were written to make the game work.

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

## Deployment

The website was deployed using GitHub pages. 

## Credits

### Content
- Information on the Simon Memory Game was obtained from [Wikipedia Article](https://en.wikipedia.org/wiki/Simon_(game))

### Media
- Picture of male & female on home page obtained from the following website: https://www.pexels.com/royalty-free-images/