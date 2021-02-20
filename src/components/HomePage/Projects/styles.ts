import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.textDark};
    text-align: center;
    padding: 1rem 0;
    
    h2{
        margin-bottom: 1rem;
        color: ${props => props.theme.colors.text};
    }
`

export const SubContainer = styled.div`
    width: 100%;
    margin: 0 auto;

    @media(min-width: 800px) {
        width: 90%;
    }

    @media(min-width: 1280px) {
        width: 70%;
    }
`

export const ProjectsContainer = styled.div`
    max-width: 100%;
    overflow-x: auto;

    @media(min-width: 800px) {
        width: 100%;
    }
`

export const ProjectList = styled.ul<IStyledProjectList>`
    width: ${props => props.projectCount * 96}vw;
    height: 20rem;
    display: flex;
    margin: 0 auto;
    justify-content: start;

    @media(min-width: 750px) {
        width: ${props => props.projectCount * 50}vw;
    }

    @media(min-width: 1280px) {
        width: ${props => props.projectCount * 32}vw;
    }
    
`