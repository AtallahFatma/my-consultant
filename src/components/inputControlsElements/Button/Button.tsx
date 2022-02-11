import React, { FC } from "react";
import { Props } from "./Button.interface";
import ButtonContainer from "./Button.styled";

const Button: FC<Props> = (props) => {
    const { children, variant, onPress } = props;

    return (
        <ButtonContainer variant={variant} onClick={onPress}>
            {children}
        </ButtonContainer>
    );
};

export default Button;