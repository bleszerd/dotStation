import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
`

export const Icon = styled.a`
    font-size: 2.5rem;
    color: ${props => props.theme.colors.textDark};

    @media(min-width: 800px) {
        margin: 0 0 0 1rem;
    }
`