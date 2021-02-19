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

export const ProjectList = styled.ul`
    width: 500%;
    height: 20rem;
    display: flex;

    @media(min-width: 800px) {
        padding: .4rem;
        max-width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: repeat(1fr);
        grid-row-gap: .5rem;
        grid-column-gap: .5rem;
    }
`

export const ProjectCard = styled.li`
    width: 100vw;
    display: flex;
    border-radius: 1rem;
    margin: .4rem;

    @media(min-width: 800px) {
        width: 100%;
        height: 20rem;
        margin: 0 auto;
        border-radius: .3rem;
    }
`

export const Image = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://growth-train.dk/wp-content/uploads/2019/05/growthtrain_fbprofileNEW.jpg");
    width: 100%;
    border-radius: 1rem;

    @media(min-width: 800px) {
        border-radius: .3rem;
    }
`

export const ProjectInfo = styled.div`
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    color: ${props => props.theme.colors.text};
    text-shadow: 1px 1px 0 ${props => props.theme.colors.textDark};
    @media(min-width: 800px) {
        border-radius: .3rem;
    }
`