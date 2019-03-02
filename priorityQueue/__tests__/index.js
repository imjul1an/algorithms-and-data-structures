import { createPriorityQueue } from '../index'

describe("High Priority Queue", () => {
    it ('should peek the right task in the queue. FIFO', () => {
        const q = createPriorityQueue()
        q.enqueue('message one')
        q.enqueue('message two')
        q.enqueue('message three')

        q.dequeue()

        expect(q.length).toBe(2)
        expect(q.peek()).toBe('message two')
    });

    it ('should peek first the priority task in the queue. FIFO', () => {
        const q = createPriorityQueue()
        q.enqueue('message one')
        q.enqueue('message two')
        q.enqueue('message three', true)
        q.enqueue('message four')
        q.enqueue('message five')

        expect(q.length).toBe(5)
        expect(q.peek()).toBe('message three')
    });
})