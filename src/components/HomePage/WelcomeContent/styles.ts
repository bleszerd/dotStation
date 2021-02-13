import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
export const TextContainer = styled.div`
    display: flex;
    height: 100%;

    h2{
        text-align: center;
        color: ${props => props.theme.colors.textDark};
        margin: 1rem .4rem;
    }

    div{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div p{
        color: ${props => props.theme.colors.textDark};
        text-align: justify;
        padding: 1rem;
        max-width: 80rem;
    }
`

export const Binary = styled.p`
    height: auto;
    text-align: justify;
    color: ${props => props.theme.colors.summer};
    font-weight: 600;
    writing-mode: vertical-lr;
    line-height: 100%;
    padding: .5rem .2rem;
    max-height: 420px;
`