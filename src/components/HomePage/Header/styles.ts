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

export const MenuContainer = styled.section<IStyledMenuContainer>`
    position: absolute;
    left: 1rem;
    margin-top: .6rem;

    @media(min-width: 800px) {
        display: none;
    }

    svg{
        transition: all .6s ease-in-out;
        color: ${props => props.active ? props.theme.colors.sand : props.theme.colors.text};
        font-size: ${props => props.active ? '2' : '1.5'}rem;
        transform: rotateZ(${props => props.active ? '90' : '0'}deg);
    }
`

export const LogoContainer = styled.section`
    h2{
        color: ${props => props.theme.colors.text};
        font-size: 2rem;
    }
`