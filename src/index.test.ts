import { helloWorld } from '.'
import { expect } from 'chai'

describe('index', () => {
  it('should do something', () => {
    expect(helloWorld()).to.equal('hello world')
  })
})
