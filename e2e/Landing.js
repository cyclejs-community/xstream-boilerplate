const URL = process.env.E2E && process.env.E2E.trim() === 'CBT'
  ? 'http://local/200.html'
  : 'http://localhost:8080'

const {describe, it} = global

describe('Landing page', () => {
  it('should show a welcoming', (browser) => {
    browser
      .url(URL)
      .waitForElementVisible('body', 3000)
      .pause(2000)
      .assert.containsText('.welcome', 'Cycle.js Diversity XStream Boilerplate')
      .end()
  })
})
