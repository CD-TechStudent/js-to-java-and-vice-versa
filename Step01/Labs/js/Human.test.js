const { TestScheduler } = require('jest');
const Human = require("./Human");

test("get name", () => {
    // Given
    let human = new Human();
    let expected = "Tom";


    // When
    let actual = human.getName();
    //Then
    expect(actual).toEqual(expected);
});