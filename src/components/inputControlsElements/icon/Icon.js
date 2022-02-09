import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIcon } from './Icon.styled';

const Icon = (props) => {
    const { icon, className, ...restProps } = props;
    if (typeof icon !== 'string') return <FontAwesomeIcon {...props} />;
    return <StyledIcon className={`icon-${icon} ${className || ''}`} {...restProps} />;
};

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    size: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Icon;
