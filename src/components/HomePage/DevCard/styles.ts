import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    margin-top: -6rem;
    padding-top: 7rem;
    display: flex;
    justify-content: center;
    background: ${props => props.theme.colors.sand};
`

export const CardWrapper = styled.div`
    padding: .8rem 0;
    width: 100%;
    padding: .5rem .5rem;
    display: flex;

    img{
        height: 20vh;
        border-radius: 1rem;
    }
`

export const DevInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: .4rem;
    width: 100%;
    color: ${props => props.theme.colors.textDark};

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