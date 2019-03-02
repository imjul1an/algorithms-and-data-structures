import { createQueue } from '../index'

describe('Queue', () => {
  it('should "peek" the last task in the queue', () => {
    const q = createQueue()
    q.enqueue('task first')
    q.enqueue('task second')
    q.enqueue('task third')

    expect(q.peek()).toBe('task first')
  })

  it('should "enqueue/push" the task at the beginning of the queue', () => {
    const q = createQueue()
    q.enqueue('task first')
    q.enqueue('task second')
    q.enqueue('task third')

    expect(q.length).toBe(3) // check init length

    q.enqueue('task four') // enqueue/push task to the queue

    expect(q.length).toBe(4) // check updated length of the queue

    // process 3 task from the queue
    q.dequeue()
    q.dequeue()
    q.dequeue()

    // last task should be the one we enququed/pushed.
    expect(q.peek()).toEqual('task four') // check that the last executed task is the one we addded
    expect(q.length).toEqual(1)
  })

  it('should "dequeue" the last task in the queue', () => {
    const q = createQueue()
    q.enqueue('task first')
    q.enqueue('task second')
    q.enqueue('task third')

    expect(q.dequeue()).toBe('task first')
    expect(q.length).toEqual(2)
  })
})
