# js-sandbox-demo

Some code that uses [QuickJS](https://www.npmjs.com/package/quickjs-emscripten) to implement a sandbox wherein it's safe to execute untrusted JavaScript code.

It also demonstrates exposing functions from the native JS environment into the sandbox.

This example works in both node and the browser.

## Running

```
yarn install
yarn ts-node src/index.ts
```
