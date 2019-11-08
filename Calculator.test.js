const Calculator = require('./Calculator.js')

test('7 add 7 Equal 14', () => {
    const number1 = 7
    const number2 = 7
    const result = Calculator.add(number1, number2)
    expect(result).toBe(14)
})
test('10 minus 5 Equal 5', () => {
    const number1 = 10
    const number2 = 5
    const result = Calculator.minus(number1, number2)
    expect(result).toBe(5)
})
test('2 multiple 2 Equal 4', () => {
    const number1 = 2
    const number2 = 2
    const result = Calculator.multiple(number1, number2)
    expect(result).toBe(4)
})
test('27 divided 9 Equal 3', () => {
    const number1 = 27
    const number2 = 9
    const result = Calculator.divided(number1, number2)
    expect(result).toBe(2)
})
test('10 mod 3 Equal 1', () => {
    const number1 = 15
    const number2 = 7
    const result = Calculator.mod(number1, number2)
    expect(result).toBe(1)
})