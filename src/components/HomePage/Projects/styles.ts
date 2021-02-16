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

export const ProjectsContainer = styled.div`
    max-width: 100%;
    overflow-x: scroll;
`

export const ProjectList = styled.ul`
    width: 200vw;
    height: 20rem;
    display: flex;
`

export const ProjectCard = styled.li`
    width: 100vw;
    display: flex;
    border-radius: 1rem;
    margin: .4rem;
`

export const Image = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://growth-train.dk/wp-content/uploads/2019/05/growthtrain_fbprofileNEW.jpg");
    width: 100%;
    border-radius: 1rem;
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
`