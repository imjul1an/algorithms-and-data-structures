import { createQueue } from '../index'

describe('Queue', () => {
  it('should peek the right task in the queue', () => {
    const q = createQueue()
    q.enqueue('message one')
    q.enqueue('message two')
    q.enqueue('message three')

    expect(q.length).toBe(3)
    expect(q.peek()).toBe('message one')
  })

  it('should dequeue the right task in the queue', () => {
    const q = createQueue()
    q.enqueue('message one')
    q.enqueue('message two')
    q.enqueue('message three')

    q.dequeue()

    expect(q.length).toBe(2)
    expect(q.peek()).toBe('message two')
  })
})
