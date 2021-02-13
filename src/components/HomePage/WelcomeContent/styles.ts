import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    padding: .4rem .8rem .4rem 0;
    justify-content: center;
    align-items: center;
    max-height: 32rem;
    overflow: hidden;
    color: ${props => props.theme.colors.textDark};
`
export const TextContainer = styled.div`
    h2{
        margin-top: 1rem;
        text-align: center;
        font-weight: bold;
        padding-bottom: 2rem;
    }

    p{
        text-align: justify;
    }
`

export const Binary = styled.p`
    padding: 0 .8rem 0 .4rem;
    writing-mode: vertical-lr;
    text-align: justify;
    color: ${props => props.theme.colors.summer};
    font-weight: 600;
    line-height: 120%;
`