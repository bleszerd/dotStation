import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    margin-top: -6rem;
    padding-top: 7rem;
    display: flex;
    justify-content: center;
    background: ${props => props.theme.colors.sand};

    @media(min-width: 800px) {
        margin-top: -20rem;
    }
`

export const CardWrapper = styled.div`
    padding: .8rem 0;
    padding: .5rem .5rem;
    display: flex;

    @media(min-width: 800px) {
        width: auto;
        padding-bottom: 2rem;
        margin: 0 auto;
    }


    img{
        height: 20vh;
        border-radius: 1rem;
        position: relative;
        max-width: 180px;
        max-height: 180px;
    }
`

export const DevInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: .4rem;
    width: 100%;
    color: ${props => props.theme.colors.textDark};

    @media(min-width: 800px) {
        justify-content: center;
        align-items: center;
    }

    h2{
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: .2rem;
    }

    b{
        font-weight: 900;
        font-size: 1.7rem;
    }

    small{
        margin-top: -.7rem;

        b{
            font-weight: bold;
            font-size: initial;
        }
    }
`