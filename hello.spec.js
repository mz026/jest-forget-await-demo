function doAsync (ret, timeout = 500, log = true) {
  let currentBrowserKey = global.browser.key
  console.log('key when doAsync: ', currentBrowserKey)

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(`setTimeout, expected: ${currentBrowserKey}, current global: ${global.browser.key}`)
      resolve(ret)
    }, timeout)
  })
}

describe('Greeting', () => {
  it('forgets await', async () => {
    doAsync(1, 1000)
    expect(true).toEqual(true)
    console.log('finish spec')
  })
})
