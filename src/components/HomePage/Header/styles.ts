import styled from "styled-components";

export const Container = styled.header`
    background: ${props => props.theme.colors.purple};
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 800px) {
        justify-content: start;
        padding: 0 2rem;
    }
`

export const MenuContainer = styled.section`
    position: absolute;
    left: 1rem;
    margin-top: .6rem;

    @media(min-width: 800px) {
        display: none;
    }

    svg{
        color: ${props => props.theme.colors.text};
        font-size: 1.5rem;
    }
`

export const LogoContainer = styled.section`
    h2{
        color: ${props => props.theme.colors.text};
        font-size: 2rem;
    }
`