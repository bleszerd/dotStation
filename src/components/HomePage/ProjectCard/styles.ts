import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    border-radius: 1rem;
    margin: .4rem;
`
export const ImageContainer = styled.div<IStyledProjectImageContainer>`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: .5rem;
    box-shadow: 1px 1px 3px 1px black;
`

export const TextContainer = styled.div`
    background: rgba(0, 0, 0, .5);    
    width: 100%;
    height: 100%;
    border-radius: .5rem;
`

export const TextWrapper = styled.div`
    height: 100%;
    display: flex;
    color: white;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
    text-shadow: 1px 1px 0 black;

    h3{

    }
`

export const BlogLink = styled.a`
    text-decoration: none;
`