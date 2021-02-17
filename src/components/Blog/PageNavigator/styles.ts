import styled from "styled-components";

export const Container = styled.aside`
    width: 100%;
    padding: 0 0 1rem 0;
`

export const NavigatorWrapper = styled.ul`
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-around;
    width: 30%;
    list-style: none;
    grid-column-gap: .5rem;

    p{
        padding-top: .25rem;
        font-weight: bold;
        color: ${props => props.theme.colors.purple};
    }

    li{
        border-radius: .5rem;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.text};
        text-shadow: 1px 1px 1px black;
        background: ${props => props.theme.colors.purple};
    }
`