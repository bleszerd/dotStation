import styled from 'styled-components'

export const Container = styled.div`
    padding-bottom: 1rem;
    margin: 0 0;
    background: ${props => props.theme.colors.sand};
    display: flex;

    @media(min-width: 800px) {
        padding: 2rem 1rem;
        background: linear-gradient(${props => props.theme.colors.sand} 75%, ${props => props.theme.colors.textDark} 25%);
    }
`

export const ChartWrapper = styled.div`
    flex: 1;
    height: 100%;
    padding: 1rem .2rem 3rem .2rem;
    background: ${props => props.theme.colors.textDark};
    display: flex;
    flex-direction: column;
    min-height: 25rem;
    max-height: 30rem;
    border-radius: 5% 0 5% 0;
    max-width: 530px;
    margin: 0 auto;

    @media(min-width: 800px) {
        box-shadow: 4px 4px 0 2px ${props => props.theme.colors.summer};
    }
`

export const Hint = styled.small`
    text-align: center;
    color: ${props => props.theme.colors.textGray};
    font-size: .7rem;
    margin-bottom: 1rem;
`

export const GraphText = styled.div`
    flex: 0.6;
    text-align: right;
    color: ${props => props.theme.colors.textDark};
    display: flex;
    flex-direction: column;
    max-width: 280px;
    margin: 0 auto;

    h2{
        font-size: 1.1rem;
        margin-bottom: .5rem;
        width: 96%;
    }

    p{
        width: 90%;
        margin-left: 10%;
        margin-top: .9rem;

        b{
            font-weight: bold;
        }

    }

    b {
        font-weight: bold;
        font-size: 1rem;
        margin-top: 3rem;
        width: 90%;
        margin-left: 10%;
        filter: invert(1);
    }

    @media(max-width: 799px) {
        display: none;
    }
`
