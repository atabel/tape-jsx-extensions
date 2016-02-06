# tape-jsx-extensions

[![npm](https://img.shields.io/npm/v/tape-jsx-extensions.svg)](https://www.npmjs.com/package/tape-jsx-extensions)
[![npm](https://img.shields.io/npm/l/tape-jsx-extensions.svg)](https://www.npmjs.com/package/tape-jsx-extensions)

[Tape](https://github.com/substack/tape) [extensions](https://github.com/atabel/extend-tape) collection to make React component easier to test.

## Install
```
$ npm install --save-dev extend-tape
$ npm install --save-dev tape-jsx-extensions
```
## How to use

Testing React components is very easy with `tape` + `tape-jsx-extensions`:

```javascript
const MyComponent = function ({color}) {
    const className = `box color-${color}`;
    return (
        <div className={className}></div>
    );
};
```

```javascript
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxExtensions from 'tape-jsx-extensions';
import MyComponent from '../MyComponent';

// extend tape with jsx extensions:
const test = addAssertions(tape, jsxExtensions);

test('MyComponent is properly rendered', (t) => {
	const renderer = createRenderer();
    renderer.render(<MyComponent color="red" />);
    const result = renderer.getRenderOutput();

	// compare output with the expected result:
    t.jsxEquals(result, <div className="box color-red"></div>);
    t.end();
});
```

## Assert methods

- [`t.jsxEquals(jsx, expectedJsx)`](https://github.com/atabel/tape-jsx-equals)

## Run tests
```
$ npm install
$ npm test
```
