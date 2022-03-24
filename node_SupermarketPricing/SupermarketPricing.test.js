test('buy one can of beans', () => {
    var result = calculator(1)
    expect(result).toBe(0.65)
});

test('buy two cans of beans', () => {
    var result = calculator(2)
    expect(result).toBe(1.3)
});

test('buy three cans of beans', () => {
    var result = calculator(3)
    expect(result).toBe(1)
});

test('buy four cans of beans', () => {
    var result = calculator(4)
    expect(result).toBe(1.65)
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