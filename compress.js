"use strict"

function compress(str) {
  validateArgType(str)
  validateIfArgHasNumbers(str)

  let compressed = ""
  let count = 1

  for (let i = 0; i <= str.length; i++, count++)  {
    const currChar = str[i]
    const nextChar = str[i + 1]

    if (nextChar !== currChar) {
      compressed += count + currChar
      count = 0
    }
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
