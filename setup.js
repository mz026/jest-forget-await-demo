beforeEach(() => {
  global.browser = createBrowser()
  console.log('browser before', global.browser)
})
afterEach(function() {
  global.browser.closed = true
})

function createBrowser () {
  const rand = Math.random()
  return { key: rand }
}
