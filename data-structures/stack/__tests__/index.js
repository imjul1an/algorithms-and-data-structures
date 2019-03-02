import { createStack } from '../index'

describe('Stack', () => {
  it('should pick the top item in the stack', () => {
    const loweBodyStack = createStack()

    loweBodyStack.push('underware')
    loweBodyStack.push('socks')
    loweBodyStack.push('pants')
    loweBodyStack.push('shoes')

    expect(loweBodyStack.peek()).toEqual('shoes')
  })

  it('should pick the top item in the stack after poping the item.', () => {
    const loweBodyStack = createStack()

    loweBodyStack.push('underware')
    loweBodyStack.push('socks')
    loweBodyStack.push('pants')
    loweBodyStack.push('shoes')

    loweBodyStack.pop()
    expect(loweBodyStack.peek()).toEqual('pants')
  })
})
