test('buy one can of beans', () => {
    var result = calculator(1)
    expect(result).toBe(0.65)
});

function calculator(articles) {
    return articles;
}