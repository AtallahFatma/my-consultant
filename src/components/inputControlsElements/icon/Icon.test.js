import React from 'react';
import { cleanup, render } from '@testing-library/react';

// Not necessary yet, but should be useful later
// const getStyledComponentStyles = (StyledComponent, index = 0) => {
//     const componentClass = StyledComponent().type.styledComponentId;
//     const components = document.getElementsByClassName(componentClass);
//     return window.getComputedStyle(components[index]);
// };

import { Icon } from './index';

afterEach(() => {
    cleanup();
});

const defaultProps = {
    icon: 'calendar',
    size: '1x',
    color: 'red',
};

it('Should render without crashing, with the right css', () => {
    const {
        container: { firstChild: iconElt },
    } = render(<Icon {...defaultProps} />);
    const iconComputedStyle = window.getComputedStyle(iconElt);
    expect(iconComputedStyle['font-size']).toBe('1em');
    expect(iconComputedStyle.color).toBe(defaultProps.color);
});

it('Should apply specific style if size is lg/sm/xs', () => {
    const {
        container: { firstChild: iconElt },
    } = render(<Icon {...defaultProps} size="lg" />);
    const iconComputedStyle = window.getComputedStyle(iconElt);
    expect(iconComputedStyle['font-size']).toBe('1.33333em');
    // apparently pseudo-elements (:before and :after) are not supported by jest and react-testing-library, so leaving this here until it is.
    // const iconBeforePseudoEltStyle = window.getComputedStyle(iconElt, ':before');
    // expect(iconBeforePseudoEltStyle['line-height']).toBe('0.75em');
    // expect(iconBeforePseudoEltStyle['vertical-align']).toBe('-0.0667em');
});
