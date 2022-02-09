import styled from 'styled-components';

const sizeWordsToEm = {
    xs: 0.75,
    sm: 0.875,
    lg: 1.33333,
};

export const StyledIcon = styled.i`
    height: 1em;
    font-size: ${({ size }) => size && `${sizeWordsToEm[size] || parseInt(size, 10)}em`};
    color: ${({ color }) => color};
    &[class*=' icon-']:before,
    &[class^='icon-']:before {
        line-height: ${({ size }) => (size === 'lg' ? '0.75em' : 'inherit')};
        vertical-align: ${({ size }) => (size === 'lg' ? '-0.0667em' : 'inherit')};
    }
`;
