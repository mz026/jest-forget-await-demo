# What if we forget to await promises in Jest?

note: the following results are gained by running spec with `testEnvironment: node`

The forgotten promises may or may not keep running, depends on whether Jest has other tests to run in the meantime.

1. If the forgotten promises don't run, the testing process ends successfully no matter the result of the promise.
2. If the forgotten promises run:
  2.a -- if it works, everything is fine
  2.b -- if it fails, **Jest fails the other(the running one) spec**, causing confusion
  2.c -- if it invokes `console.log`,
    - **Jest fails the other(the running one) spec**, causing confusion
    - You also get `Cannot log after tests are done. Did you forget to wait for something async in your test?`
