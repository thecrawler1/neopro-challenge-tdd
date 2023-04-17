"use strict"

function compress(str) {
  validateArgType(str)
  validateIfArgHasNumbers(str)

  let compressed = ""

  for (let i = 0; i < str.length;)  {
    const char = str[i]
    let count = 1

    while (char === str[++i])
      count++

    compressed += count + char
  }

  return compressed
}

function validateArgType(str) {
  if (typeof str !== "string")
    throw new Error("The input has to be a string")
}

function validateIfArgHasNumbers(str) {
  const regex = /\d/
  const hasNumbers = regex.test(str)

  if (hasNumbers)
    throw new Error("The input cannot contain numbers")
}

module.exports = compress
