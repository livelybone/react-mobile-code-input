# @livelybone/react-mobile-code-input
[![NPM Version](http://img.shields.io/npm/v/@livelybone/react-mobile-code-input.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/react-mobile-code-input)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/react-mobile-code-input.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/react-mobile-code-input)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

A module for code input, each char corresponds to one input box

## repository
git@github.com:livelybone/react-mobile-code-input.git

## Demo
git@github.com:livelybone/react-mobile-code-input#readme

## Run Example
you can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone git@github.com:livelybone/react-mobile-code-input.git`
2. Go to the directory `cd [the-module-directory]`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S @livelybone/react-mobile-code-input
```

## Global name - The variable the module exported in `umd` bundle
`ReactMobileCodeInput`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import ReactMobileCodeInput from '@livelybone/react-mobile-code-input'

const App = () => {
  const [value, setValue] = React.useState('')

  return (
    <div>
      <ReactMobileCodeInput value={value} onChange={setValue} />
    </div>
  )
}
```

## CDN
Use in html, see what you can use in [CDN: unpkg](https://unpkg.com/@livelybone/react-mobile-code-input/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/react-mobile-code-input/lib/umd/<--module-->.js"></script>
```

Or，see what you can use in [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/@livelybone/react-mobile-code-input/lib/umd/)
```html
<script src="https://cdn.jsdelivr.net/npm/@livelybone/react-mobile-code-input/lib/umd/<--module-->.js"></script>
```

## style
For building style, you may need to import the css or scss file:
```js
// scss
import '@livelybone/react-mobile-code-input/lib/css/index.scss'

// css
import '@livelybone/react-mobile-code-input/lib/css/index.css'
```
Or
```scss
// scss
@import '~@livelybone/react-mobile-code-input/lib/css/index.scss'

// css
@import '~@livelybone/react-mobile-code-input/lib/css/index.css'
```

Or, you can build your custom style by copying, editing and importing `node_modules/@livelybone/react-mobile-code-input/lib/css/index.scss`

## QA

1. Error `Error: spawn sass ENOENT`

> You may need install node-sass globally, `npm i -g sass`
