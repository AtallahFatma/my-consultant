import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import { applyStyleFrom } from '../styling/mediaQueries.ts';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #0f6378;
`;

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
     
    background: ${colors.light};
    border-bottom: 1px solid ${colors.dark50};
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 21;
    height: ${colors.navbarHeight}px;

    // to move code
    font-family: Moderat,Arial,Helvetica,sans-serif;
    font-weight: 400;
    ${applyStyleFrom().md`
        font-size: 17px;
    `}
    font-size: 12px;
    color: #333330;
    line-height: 1.25;
`;

const Button = styled.a`
    font-family: Moderat,Arial,Helvetica,sans-serif;
    transition: background-color .4s,border .4s;
    min-height: 53px;
    padding: 10px 20px;
    font-size: 17px;
    border-radius: 26px;
    border: 2px solid transparent;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
    opacity: 1;
    position: relative;
    `;

const BtnSmall = styled(Button)`    
    min-height: 42px;
    font-size: 15px;
    border-radius: 21px;`;

const BtnSecondary = styled(Button)`
    background-color: transparent;
    color: #0f6378;
    border: 2px solid #0f6378;
    `;

const BtnDefault = styled(Button)`
    background-color: #0f6378;
    color: #fff;
    border: 2px solid transparent;
    `;

const BtnMain = styled(Button)`    
    background-color: #fc5757;
    color: #fff;
    `;

const StyledItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;`;

function Header(props) {
    return (
        <Wrapper>
            <Title>
                Hello World!
            </Title>
            <StyledItems>
                <li>
                    <img src="//dam.malt.com/rebranding2020/flags/flag-FR" alt="FR" className="ls-country-flag" />
                    <span className="ls-code">fr</span>
                </li>
                <li>
                    <BtnSecondary href="/create-profile">
                        Je suis freelance
                    </BtnSecondary>
                </li>
                <li>
                    <BtnDefault href="#">
                        Me connecter
                    </BtnDefault>
                </li>
                <li>
                    <BtnMain href="/signup" rel="nofollow">
                        Créer mon compte
                    </BtnMain>
                </li>
            </StyledItems>
        </Wrapper>

    );
}

export default Header;