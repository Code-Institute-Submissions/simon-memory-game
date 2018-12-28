
describe("Game Logic Tests", function(){
    
    // Make sure a valid color is returned
    describe("Make sure a valid colour is returned by the 'generateColour' function", function(){
        // Make sure that colour returned is 'green', 'red', 'yellow' or 'blue'
        var pattern = /(green|red|yellow|blue)/;

        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(generateColour()).toMatch(pattern);
        });
        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(generateColour()).toMatch(pattern);
        });
        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(generateColour()).toMatch(pattern);
        });
        it("should return 'green', 'red', 'yellow' or 'blue'", function(){
            expect(generateColour()).toMatch(pattern);
        });
    });

    // Make sure that whilst the 'addSimonSequence' function is adding simon sequences, that the 'isUnique' function is called 20 times
    describe("Make sure 'isUnique' function is being called from the 'addSimonSequence' function", function(){
        it("'isUnique' should be called 20 times from 'addSimonSequence' function", function(){
            spyOn(window, "isUnique");
            addSimonSequence();
            expect(isUnique).toHaveBeenCalledTimes(20);
        });
    });

    // Make sure that after the 'addSimonSequence' function is called that 20 entries are added to 'simonSequence' Array
    describe("Make sure 'simonSequence' Array has 20 entries after calling 'addSimonSequence' func", function(){
        it("'isUnique' should be called 20 times from 'addSimonSequence' function", function(){
            // Empty simonSequence array for a fair test
            simonSequence = [];
            addSimonSequence();
            expect(simonSequence.length).toBe(20);
        });
    });


    // Make sure 'isUnique' function is enforcing the 3 consecutive colour rule
    describe("Test 3 consecutive colour rule", function(){
        // Apply dummy sequence to 'isUnique' function and checking result
        it(`'${["green", "yellow", "red", "red", "red"]}' Should return 'false'`, function(){
            expect(isUnique(["green", "yellow", "red", "red", "red"], "red")).toBe(false);
        });
        
        it(`'${["blue", "yellow", "yellow", "green", "red", "red", "green"]}' Should return 'true'`, function(){
            expect(isUnique(["blue", "yellow", "yellow", "green", "red", "red", "green"], "green")).toBe(true);
        }); 
        
        it(`'${["blue", "blue", "blue"]}' Should return 'false'`, function(){
            expect(isUnique(["blue", "blue", "blue"], "blue")).toBe(false);
        }); 

        it(`'${["red", "yellow"]}' Should return 'true'`, function(){
            expect(isUnique(["red", "yellow"], "yellow")).toBe(true);
        }); 
    });

    // Make sure 'correctInput' function is correctly working
    describe("Test User input against Simon Sequence", function(){
        // Dummy variables
        var simonSequence = [];
        var userInput = [];

        it(`Simon sequence: '${["green", "yellow", "red", "red", "red"]}' | User Input: '${["green", "yellow", "red", "red"]}' Should return 'true'`, function(){
            simonSequence = ["green", "yellow", "red", "red", "red"];
            userInput = ["green", "yellow", "red", "red"];
            expect(correctInput(simonSequence, userInput)).toBe(true);
        });

        it(`Simon sequence: '${["blue", "green", "red", "yellow", "green"]}' | User Input: '${["yellow", "yellow", "red", "green"]}' Should return 'false'`, function(){
            simonSequence = ["blue", "green", "red", "yellow", "green"];
            userInput = ["yellow", "yellow", "red", "green"];
            expect(correctInput(simonSequence, userInput)).toBe(false);
        });

        it(`Simon sequence: '${["yellow", "red", "green", "blue", "blue"]}' | User Input: '${["yellow", "red"]}' Should return 'true'`, function(){
            simonSequence = ["yellow", "red", "green", "blue", "blue"];
            userInput = ["yellow", "red"];
            expect(correctInput(simonSequence, userInput)).toBe(true);
        });

        it(`Simon sequence: '${["yellow", "blue", "blue"]}' | User Input: '${["green", "blue", "blue"]}' Should return 'false'`, function(){
            simonSequence = ["yellow", "blue", "blue"];
            userInput = ["green", "blue", "blue"];
            expect(correctInput(simonSequence, userInput)).toBe(false);
        });
        
    });

});