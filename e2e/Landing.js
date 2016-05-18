const {describe, it} = global

describe('Landing page', () => {
  it('should show a welcoming', (browser) => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 3000)
      .pause(2000)
      .assert.containsText('.welcome', 'Cycle.js Diversity XStream Boilerplate')
      .end()
  })
})
