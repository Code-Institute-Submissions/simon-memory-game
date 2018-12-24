describe("Simon", function(){
    describe("Game Logic Test", function(){
        it("Should return 'FizzBuzz'", function(){
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        //Defensive programming
        it("Should return a Error if we don't provide a number", function(){
            expect(fizzBuzz("Cheese")).toBe("Error!");
        });
    });
});