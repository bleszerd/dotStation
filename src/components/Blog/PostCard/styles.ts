import styled from "styled-components"

export const Container = styled.li<IStyledPostCardImage>`
    list-style: none;
    margin: 0 auto;
    width: 100%;
    height: 17rem; 
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    border-radius: .25rem;
    max-width: 100%;
    max-height: 17rem;
`

export const OverlayAndInfo = styled.a`
    text-decoration: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    transition: background .1s ease-in;
    border-radius: .25rem;

    :hover{
        background: rgba(0, 0, 0, .2);
    }

    //title
    h2{
        color: ${props => props.theme.colors.text};
        text-shadow: 1px 1px 1px black;
        padding: .5rem 0;
        max-height: 17rem;
        overflow: auto;
    }

    //metadata
    p{
        font-size: .8rem;
        color: ${props => props.theme.colors.text};
        text-shadow: 1px 1px 1px black;
        text-align: right;

        a{
            color: ${props => props.theme.colors.text};
            text-decoration: none;
            font-weight: bold;
        }
    }
`