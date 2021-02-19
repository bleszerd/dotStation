import styled from "styled-components";

export const Container = styled.main`
    width: 96%;
    height: 100%;
    margin: -9rem auto auto auto;
    background: ${props => props.theme.colors.text};

    @media(min-width: 800px) {
        width: 75%;
    }

    @media(min-width: 800px) {
        width: 75%;
    }

    @media(min-width: 1280px) {
        width: 60%;
        max-width: 900px;
    }
`

export const PostBody = styled.section`
    padding-bottom: 2rem;
`