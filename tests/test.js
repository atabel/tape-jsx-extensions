import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxExtensions from '../src/index';

const test = addAssertions(tape, jsxExtensions);

const renderer = createRenderer();
const render = jsx => {
    renderer.render(jsx);
    return renderer.getRenderOutput();
};

const MyComponent = function ({color}) {
    const className = `box color-${color}`;
    return (
        <div className={className}></div>
    );
};

test('jsxEquals', (t) => {
    t.jsxEquals(
        render(<MyComponent color="red" />),
        <div className="box color-red"></div>,
        'Two components are equal'
    );
    t.end();
});