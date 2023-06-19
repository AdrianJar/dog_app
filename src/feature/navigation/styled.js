import { styled } from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({theme})=> theme.colors.black};
    color: ${({theme})=> theme.colors.white};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
`;