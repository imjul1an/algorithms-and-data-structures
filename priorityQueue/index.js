import { createQueue } from '../queue';


export const createPriorityQueue = () => {
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();
    
    return {
        enqueue: (item, highPriority = false) => {
            highPriority
                ? highPriorityQueue.enqueue(item)
                : lowPriorityQueue.enqueue(item)
        },
        dequeue: () => {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue();
            }

            return lowPriorityQueue.dequeue();
        },
        peek: () => {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek();
            }

            return lowPriorityQueue.peek();
        },
        get length() {
            return lowPriorityQueue.length + highPriorityQueue.length;
        },
        isEmpty: () => {
            return (
                lowPriorityQueue.isEmpty() &&
                highPriorityQueue.isEmpty()
            )
        }
    }
}