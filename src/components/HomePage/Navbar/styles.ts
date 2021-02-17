import styled from "styled-components";

export const Container = styled.aside<IStyledNavbarContainer>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.textDark};
    z-index: 500;
    visibility: ${props => props.opened ? 'visible' : 'hidden'};
    width: ${props => props.opened ? '100' : '0'}%;
    filter: opacity(${props => props.opened ? '100' : '0'}%);
    transition: all .6s ease-in-out;
    margin-top: 5rem;
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    margin: 0 auto;
`

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: .6rem 0;

    svg{
        font-size: 3rem;
        color: ${props => props.theme.colors.sand};
    }

    h3{
        color: ${props => props.theme.colors.text};
        font-size: 1.6rem;
        padding: 0 0 0 1.4rem;
    }
`

export const Copy = styled.div`
    position: absolute;
    bottom: 6rem;
    text-align: center;
    width: 100vw;

    small{
        color: ${props => props.theme.colors.text};

        a{
            color: ${props => props.theme.colors.text};
            text-decoration: none;
            font-weight: bold;
        }
    }
`