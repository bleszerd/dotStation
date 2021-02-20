import { Container, SubContainer, ProjectsContainer, ProjectList } from './styles'
import ProjectCard from '../ProjectCard'

//ProjectsData hard code
const projectsData = [
    {
        title: "Projeto #001",
        image: "https://www.crushpixel.com/big-static14/preview4/test-tube-flask-with-blue-1672814.jpg",
        description: "Aqui ficaria uma descrição do projeto vinculado a uma postagem no blog.",
        blogURL: "/blog/Publica%C3%A7%C3%A3o_de_deste_-_%23001@603147a13f50551c5dec3603"
    },
    {
        title: "Projeto #002",
        image: "https://image.shutterstock.com/z/stock-photo-test-tubes-and-erlenmeyer-flask-in-laboratory-228473260.jpg",
        description: "Aqui ficaria uma descrição do projeto vinculado a uma postagem no blog.",
        blogURL: "/blog/Publicação_de_deste_-_%23002@603147a63f50551c5dec3604"
    }
]

export default function Projects() {
    return (
        <Container>
            <SubContainer>
                <h2>Projects</h2>
                <ProjectsContainer>
                    <ProjectList projectCount={projectsData.length}>
                        {projectsData.map(project => (
                            <ProjectCard project={project} key={project.blogURL}/>
                        ))}
                    </ProjectList>
                </ProjectsContainer>
            </SubContainer>
        </Container>
    )
}