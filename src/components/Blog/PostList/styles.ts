import styled from "styled-components";

export const ContainerLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
`

export const Container = styled.ul`
    width: 96%;
    margin: 0 auto 1rem auto;
    height: 100%;
    margin-top: -9rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: repeat(1fr);
    grid-row-gap: .7rem;

    @media(min-width: 670px) {
        grid-column-gap: .5rem;
        grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 1050px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: .5rem;
    }
`