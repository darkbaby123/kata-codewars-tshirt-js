/*
https://www.codewars.com/kata/simple-fun-number-297-codewars-t-shirt/javascript

Simple Fun #297: Codewars T-shirt

Task

Codewars expands their t-shirt selection so that there is one color corresponding to 1 or 2 levels
(White/7,8kyu, Orange/5,6kyu, Blue/3,4kyu, Purple/2kyu, Red/1kyu, Black/1dan).

At the beginning of each month Codewars receives a shipment of n t-shirts. There will always be an
equal number of each color. Each user can only choose between 2 different colors when ordering a
t-shirt. At the end of each month Codewars takes all received orders and sends t-shirts, but only if
it is possible to grant all requests.

Given n and the list of orders placed, determine if Codewars has enough t-shirts to fulfill all
orders (true) or must wait until the next month (false).

Input/Output

[input] integer n

The total number of t-shirts that Codewars has for the month. It is guaranteed that n % 6 = 0.

6 ≤ n ≤ 36

[input] 2D string array orders

An array of string arrays representing the orders. Each order is an array of exactly two strings - the
color choices the Codewars made. It is guaranteed that only the following colors are given: "Red",
"Black", "Blue", "Purple", "Orange" or "White".

0 ≤ orders.length ≤ 20

[output] a boolean value

A boolean representing if all orders can be fulfilled for the month with the given t-shirts.

Example

For n = 6 and orders = [["Red", "Black"],["Red", "Black"]],

the output should be true.

Codewars has 6 shirts in stock, which means 1 of each color. If they send a red t-shirt for the first
order, we can still send a black t-shirt for the second order. Thus, both orders can be fulfilled.

For n = 6 and orders = [["Red", "Black"], ["Red", "Black"], ["Red", "Black"]]

the output should be false.

Again, there is 1 t-shirt of each color. It is possible to fulfill the first two orders by sending
1 red and 1 black shirt, however there won't be any red/black shirts to fulfill the third order.
Thus, it's impossible to fulfill all orders this month.
*/

function codewarsTshirts(n, orders) {
  const stock = ['White', 'Orange', 'Blue', 'Purple', 'Red', 'Black'].reduce((acc, color) => {
    acc[color] = n / 6
    return acc
  }, {})

  return checkOrders(orders, stock)
}

function checkOrders([order, ...restOrders], stock) {
  if (!order) return true

  return order.some(color => {
    if (stock[color] === 0) return false

    const restStock = Object.assign({}, stock)
    restStock[color] -= 1
    return checkOrders(restOrders, restStock)
  })
}

module.exports = codewarsTshirts
