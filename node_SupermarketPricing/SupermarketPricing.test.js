const add = (a, b) => a + b;

const cases = [
    [1,0.65], 
    [2, 1.3], 
    [3, 1], 
    [4,1.65],
    [5,2.3],
    [6,2],
    [7,2.65]];

describe("calculate price of beans cans", () => {
  test.each(cases)(
    "given %p cans, price should be %p",
    (numberOfCans, expectedPrice) => {
        var result = calculator(numberOfCans)
      expect(result).toEqual(expectedPrice);
    }
  );
});

function calculator(articles) {
    var articlesToCalculateCount = articles
    var bensPrice = 0.65;
    var result = 0;
    if (articles >= 3)
    {
        articlesToCalculateCount=articlesToCalculateCount- 3;
        result = 1;
    }
    result += bensPrice * articlesToCalculateCount;

    return result;
}