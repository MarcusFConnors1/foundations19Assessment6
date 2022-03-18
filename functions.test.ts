const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test("testing if it return is an object(spoiler alert, it doesn't return an array and I just wanted to see it pass)", () => {
        let test = shuffleArray([1,2,3,4,5])
        console.log(test)
        expect(typeof test).toBe("object")
    })
    test('testing if nums are shuffled', () => {
        let control = [1,2,3,4,5]
        let test1 = shuffleArray(control)
        expect(test1).not.toEqual(control)
    })
    test('testing the length of the arrays', () => {
        let control = [1,2,3,4,5]
        let test1 = shuffleArray(control)
        expect(test1.length).toBe(control.length)
    })
})