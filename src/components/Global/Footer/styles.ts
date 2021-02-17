import styled from "styled-components";

export const Container = styled.footer`
    bottom: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.purple};
`

export const Copy = styled.section`
    small{
        color: ${props => props.theme.colors.text};

        a{
            color: ${props => props.theme.colors.text};
            text-decoration: none;
            font-weight: bold;
        }
    }
`