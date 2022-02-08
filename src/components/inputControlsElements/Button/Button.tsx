import React, { FC } from "react";
import { Props } from "./Button.interface";
import ButtonContainer from "./Button.styled";

const Button: FC<Props> = (props) => {
    const { children, variant } = props;

    return (
        <ButtonContainer variant={variant}>
            {children}
        </ButtonContainer>
    );
};

export default Button;