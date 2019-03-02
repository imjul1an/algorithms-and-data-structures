import { createPriorityQueue } from '../index'

describe('High Priority Queue', () => {
  it('should dequeue the high priority task first', () => {
    const q = createPriorityQueue()

    q.enqueue('task one')
    q.enqueue('task two')
    q.enqueue('task three', true)
    q.enqueue('task four')

    expect(q.dequeue()).toEqual('task three')
  })

  it('should dequeue the last task in the queue if no high priority tasks available', () => {
    const q = createPriorityQueue()

    q.enqueue('task one')
    q.enqueue('task two')
    q.enqueue('task three')
    q.enqueue('task four')

    expect(q.dequeue()).toEqual('task one')
  })
})
