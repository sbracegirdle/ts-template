import { When, Then } from 'cucumber'
import { helloWorld } from './index'
import { expect } from 'chai'

declare module 'cucumber' {
  interface World {
    helloResult: string
  }
}

When('I am present', async function () {
  this.helloResult = helloWorld()
})

Then('I should be greeted with {string}', function (greeting: string) {
  expect(this.helloResult).to.equal(greeting)
})
