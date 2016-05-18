const {describe, it} = global

describe('Landing page', () => {
  it('should show a welcoming', (browser) => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .assert.containsText('.welcome', 'Welcome to the Sparks.Network')
      .end()
  })
})
