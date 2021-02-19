import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Image = styled.div<IStyledPostHeaderImage>`
    height: 20rem;
    background: url(${props => props.image});
    background-position: center;
    background-size: cover;
`

export const Title = styled.h1`
    font-size: 1.2rem;
    padding: 1rem .6rem 0 .6rem;
    font-weight: 600;
    text-align: center;
    margin: 0 auto;
    color: ${props => props.theme.colors.textDark};
    
    @media(min-width: 800px) {
        width: 88%;
    }

    @media(min-width: 1280px) {
        width: 90%;
    }
`

export const Metadata = styled.p`
    font-size: .8rem;
    font-weight: 300;
    text-align: end;
    padding: 0 1rem 0 0;
    color: ${props => props.theme.colors.textDark};
    padding-bottom: 1rem;

    @media(min-width: 800px) {
        width: 94%;
    }

    @media(min-width: 1280px) {
        width: 92%;
    }

    b {
        font-weight: 600;
        color: ${props => props.theme.colors.sand};
    }

    a {
        font-weight: 600;
        text-decoration: none;
        color: ${props => props.theme.colors.sand};
    }
`