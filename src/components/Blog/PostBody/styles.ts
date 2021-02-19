import styled from "styled-components";

export const Container = styled.section`
    padding: 0 0 2rem 0;
`

export const MarkdownContainer = styled.div`
    color: ${props => props.theme.colors.textDark};
    width: 90%;
    margin: 0 auto;
    text-align: justify;

    @media(min-width: 800px) {
        width: 80%;
    }

    @media(min-width: 1280px) {
        width: 80%;
    }

    p {
        margin: 1rem 0 0 0;
    }

    strong {
        font-weight: bold;
    }
`