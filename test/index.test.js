const codewarsTshirts = require('../lib/index.js')

describe('Codewars T-shirt', () => {
  it('test 1', () => {
    const re = codewarsTshirts(6, [["Red", "Black"], ["Red", "Black"]])
    expect(re).toEqual(true)
  })

  it('test 2', () => {
    const re = codewarsTshirts(6, [["Red", "Black"], ["Red", "Black"], ["Red", "Black"]])
    expect(re).toEqual(false)
  })

  it('test 3', () => {
    const orders = [
      ["White", "Purple"],
      ["Purple", "Blue"],
      ["Blue", "Orange"],
      ["Orange", "Red"],
      ["Red", "Black"],
      ["Black", "White"],
    ]
    const re = codewarsTshirts(6, orders)
    expect(re).toEqual(true)
  })

  it('test 4', () => {
    expect(codewarsTshirts(24, [])).toEqual(true)
  })

  it('test 5', () => {
    const re = codewarsTshirts(6, [["Red", "Black"], ["Red", "Black"], ["Blue", "Black"]])
    expect(re).toEqual(true)
  })

  it('test 6', () => {
    expect(codewarsTshirts(6, [["Blue", "Purple"]])).toEqual(true)
  })

  it('test 7', () => {
    const orders = [
      ["Black", "Blue"],
      ["Purple", "Blue"],
      ["Blue", "White"],
      ["White", "Orange"],
      ["White", "Blue"],
      ["Purple", "White"],
      ["White", "Purple"],
      ["White", "Red"],
      ["Blue", "Purple"],
      ["Orange", "White"],
      ["Black", "Blue"],
      ["Purple", "Red"],
      ["Blue", "Red"],
      ["Blue", "White"],
      ["Purple", "White"],
      ["Purple", "Blue"],
      ["Orange", "Red"],
    ]
    const re = codewarsTshirts(18, orders)
    expect(re).toEqual(true)
  })

  it('test 8', () => {
    const orders = [
      ["Purple", "Black"],
      ["Black", "Red"],
      ["Red", "Purple"],
      ["Red", "Purple"],
      ["White", "Orange"],
    ]
    expect(codewarsTshirts(6, orders)).toEqual(false)
  })

})
