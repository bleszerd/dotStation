import { Container, ProjectsContainer, ProjectList, ProjectCard, Image } from './styles'

export default function Projects() {
    return (
        <Container>
            <h2>Projects</h2>
            <ProjectsContainer>
                <ProjectList>
                    <ProjectCard>
                        <Image>
                            <h2>dotStation</h2>
                            <p>Portifólio com blog integrado</p>
                        </Image>
                    </ProjectCard>
                    <ProjectCard>
                        <Image>
                            <h2>dotStation</h2>
                            <p>Portifólio com blog integrado</p>
                        </Image>
                    </ProjectCard>
                </ProjectList>
            </ProjectsContainer>
        </Container>
    )
}