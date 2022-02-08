import React from 'react';
import { StyledFooterContainer, StyledFooterUnderBar, StyledLinkBrand } from './Footer.styled';

const Footer = () => {

    const renderUnderBar = () => {
        return (
            <StyledFooterUnderBar className="row middle-xs">
                {/* <StyledLogoUpplyWrapper className="col-xs-4 col-sm-5 col-md-9">
                    <img src="./logo.svg" alt='logo'/>
                    <div className="hide show-md">{renderUpplyRightsReserved()}</div>
                </StyledLogoUpplyWrapper> */}
                <div className="col-xs-8 col-sm-7 col-md-3 text-center-md text-right">
                    <StyledLinkBrand href="twitter" target="_blank" rel="noopener noreferrer">
                        {/* <Icon icon="twitter" /> */}
                    </StyledLinkBrand>

                    <StyledLinkBrand href="linkedin" target="_blank" rel="noopener noreferrer">
                        {/* <Icon icon="linkedin" /> */}
                    </StyledLinkBrand>

                    <StyledLinkBrand href="youtube" target="_blank" rel="noopener noreferrer">
                        {/* <Icon icon="youtube" /> */}
                    </StyledLinkBrand>

                    <StyledLinkBrand href="facebook" target="_blank" rel="noopener noreferrer">
                        {/* <Icon icon="facebook" /> */}
                    </StyledLinkBrand>
                </div>
            </StyledFooterUnderBar>
        );
    };

    return (
        <StyledFooterContainer className="no-print">
            {renderUnderBar()}
        </StyledFooterContainer>
    );
};

export default Footer;
