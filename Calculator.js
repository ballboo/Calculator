add = (input1, input2) => {
    return input1 + input2
}
minus = (input1, input2) => {
    return input1 - input2
}
multiple = (input1, input2) => {
    return input1 * input2
}
divided = (input1, input2) => {
    return input1/input2;    
}
mod = (input1, input2) => {
    return input1 % input2
}

const Calculator = { add, minus, multiple, divided,mod }
module.exports = Calculator