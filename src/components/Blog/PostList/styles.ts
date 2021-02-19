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
`