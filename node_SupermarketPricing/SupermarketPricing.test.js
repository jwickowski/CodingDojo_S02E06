const add = (a, b) => a + b;

const cases = [
    [1, 0.65], 
    [2, 1.3], 
    [3, 1], 
    [4, 1.65],
    [5, 2.3],
    [6, 2],
    [7, 2.65],
];

describe("calculate the price of bean cans", () => {
    test.each(cases)(
        "given %p cans, price should be %p",
        (numberOfCans, expectedPrice) => {
            var result = calculator(numberOfCans);
            expect(result).toEqual(expectedPrice);
        }
    );
});

function calculator(articles) {
    var articlesToCalculateCount = articles;
    var beansPrice = 0.65;
    var result = 0;
    while(articlesToCalculateCount >= 3) {
        articlesToCalculateCount = articlesToCalculateCount - 3;
        result = result + 1;
    }
    result += beansPrice * articlesToCalculateCount;

    return result;
}