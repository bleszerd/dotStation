import styled from "styled-components"

export const Container = styled.li`
    list-style: none;
    margin: 0 auto;
    width: 100%;
    height: 17rem; 
    background-image: url("https://ewscripps.brightspotcdn.com/77/a9/3fa549834149b88da33239946e4e/zoo-giraffe.jpg");
    background-position: center;
    background-size: cover;
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

    :hover{
        background: rgba(0, 0, 0, .2);
    }

    //title
    h2{
        color: ${props => props.theme.colors.text};
        text-shadow: 1px 1px 1px black;
        padding: .5rem 0;
    }

    //metadata
    p{
        font-size: .8rem;
        color: ${props => props.theme.colors.text};
        text-shadow: 1px 1px 1px black;

        a{
            color: ${props => props.theme.colors.text};
            text-decoration: none;
            font-weight: bold;
        }
    }
`