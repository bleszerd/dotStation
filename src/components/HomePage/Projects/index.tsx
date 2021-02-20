import { Container, SubContainer, ProjectsContainer, ProjectList } from './styles'
import ProjectCard from '../ProjectCard'

//ProjectsData hard code
const projectsData = [
    {
        title: "Projeto #001",
        image: "https://www.crushpixel.com/big-static14/preview4/test-tube-flask-with-blue-1672814.jpg",
        description: "Aqui ficaria uma descrição do projeto vinculado a uma postagem no blog.",
        blogURL: "/blog/Publicação_de_teste_-_%23001@602ff9255381042a551c1f1e"
    },
    {
        title: "Projeto #002",
        image: "https://image.shutterstock.com/z/stock-photo-test-tubes-and-erlenmeyer-flask-in-laboratory-228473260.jpg",
        description: "Aqui ficaria uma descrição do projeto vinculado a uma postagem no blog.",
        blogURL: "/blog/Publicação_de_teste_-__%23002@602ff9285381042a551c1f1f"
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
                            <ProjectCard project={project}/>
                        ))}
                    </ProjectList>
                </ProjectsContainer>
            </SubContainer>
        </Container>
    )
}