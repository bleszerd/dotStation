import styled from "styled-components";

export const Container = styled.header`
    background-image: linear-gradient( to bottom right,
        ${props => props.theme.colors.purple}, ${props => props.theme.colors.purpink}, ${props => props.theme.colors.iceCream}, ${props => props.theme.colors.summer}, ${props => props.theme.colors.sand}, ${props => props.theme.colors.yellow}
    );
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 800px) {
        justify-content: start;
        padding: 0 2rem;
        justify-content: space-between;
    }
`

export const LogoMenuWrapper = styled.section`
    margin-top: 3rem;
    height: 100%;
`

export const MenuContainer = styled.section<IStyledMenuContainer>`
    top: 1.75rem;
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
    a{
        text-decoration: none;

        h2{
            color: ${props => props.theme.colors.text};
            font-size: 2rem;
        }
    }
`

export const ButtonsWrapper = styled.section`
    top: 2rem;
    right: 1rem;
    position: absolute;
    display: none;
    width: 100%;
    justify-content: flex-end;

    a{
        color: ${props => props.theme.colors.text};
        padding: 0 1rem;
        text-decoration: none;
        font-weight: bold;
    }

    @media(min-width: 800px) {
        display: flex;
    }
`