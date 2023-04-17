const compress = require("./compress")

test("should return '' when passed ''", () => {
  expect(compress("")).toBe("")
})

test("should return '1x' when passed 'x'", () => {
  expect(compress("x")).toBe("1x")
})

test("should return '1x1y' when passed 'xy'", () => {
  expect(compress("xy")).toBe("1x1y")
})

test("should return '2x' when passed 'xx'", () => {
  expect(compress("xx")).toBe("2x")
})

test("should return '1x1y1x' when passed 'xyx'", () => {
  expect(compress("xyx")).toBe("1x1y1x")
})

test("should return '3a3b2b2a1b' when passed 'aaabbbccaab'", () => {
  expect(compress("aaabbbccaab")).toBe("3a3b2c2a1b")
})

test("should throw an exception when the input has a number", () => {
  const errorMessage = "The input cannot contain numbers"

  expect(() => compress("5")).toThrow(errorMessage)
  expect(() => compress("6x")).toThrow(errorMessage)
  expect(() => compress("x4")).toThrow(errorMessage)
})

test("should throw an exception when the input is not a string", () => {
  const errorMessage = "The input has to be a string"

  expect(() => compress(5)).toThrow(errorMessage)
  expect(() => compress(null)).toThrow(errorMessage)
  expect(() => compress({})).toThrow(errorMessage)
  expect(() => compress([])).toThrow(errorMessage)
})
