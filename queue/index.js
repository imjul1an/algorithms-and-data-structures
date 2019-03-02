// FIFO - first In, first out
export const createQueue = () => {
  const queue = []

  return {
    enqueue: item => queue.unshift(item),
    dequeue: () => queue.pop(),
    peek: () => {
      if (queue.length === 0) {
        return undefined
      }
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty: () => {
      return queue.length === 0
    }
  }
}
