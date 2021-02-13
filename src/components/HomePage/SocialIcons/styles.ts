import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
`

export const Icon = styled.a`
    font-size: 2.5rem;
    color: ${props => props.theme.colors.textDark};
`