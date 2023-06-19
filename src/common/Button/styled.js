import { styled } from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({theme})=> theme.colors.white};
    color: ${({theme})=> theme.colors.black};
    border: 1px solid red;
`;