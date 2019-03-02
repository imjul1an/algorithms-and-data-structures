// LIFO - last in first out
export const createStack = () => {
  const array = []
  return {
    push: item => {
      array.push(item) // adds one or more elements to the end of an array and returns the new length of the array.
    },
    pop: () => {
      return array.pop() // removes the last element from an array and returns that element.
    },
    peek: () => {
      return array[array.length - 1] // gets the last element of an array.
    },
    get length() {
      return array.length
    },
    isEmpty: () => {
      return array.length === 0
    }
  }
}
