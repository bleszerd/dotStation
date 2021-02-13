import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme.colors.sand};
    padding-bottom: 1rem;
`

export const ChartWrapper = styled.div`
    height: 100%;
    padding: 1rem .2rem 3rem .2rem;
    background: ${props => props.theme.colors.textDark};
    display: flex;
    flex-direction: column;
    min-height: 25rem;
    max-height: 30rem;
    border-radius: 5% 0 5% 0;
`

export const Hint = styled.small`
    text-align: center;
    color: ${props => props.theme.colors.textGray};
    font-size: .7rem;
    margin-bottom: 1rem;
`