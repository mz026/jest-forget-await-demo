# What if we forget to await promises in Jest?

note: the following results are gained by running spec with `testEnvironment: node`

The forgotten promises may or may not keep running, depends on whether Jest has other tests to run in the meantime.

1. If the forgotten promises don't run before the test ends, the testing process ends successfully no matter the result of the promise.
2. If the forgotten promises run before the test ends (see [forget-await-w-other-spec](https://github.com/mz026/jest-forget-await-demo/tree/forget-await-w-other-spec) branch):
  * if it works, everything is fine
  * if it fails, **Jest fails the other(the running one) spec**, causing confusion
  * if it invokes `console.log`,
    - **Jest fails the other(the running one) spec**, causing confusion
    - You also get `Cannot log after tests are done. Did you forget to wait for something async in your test?`
