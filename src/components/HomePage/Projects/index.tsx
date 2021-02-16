import { Container, ProjectsContainer, ProjectInfo, ProjectList, ProjectCard, Image } from './styles'

export default function Projects() {
    return (
        <Container>
            <h2>Projects</h2>
            <ProjectsContainer>
                <ProjectList>
                    <ProjectCard>
                        <Image>
                            <ProjectInfo>
                                <h2>dotStation</h2>
                                <p>Portifólio com blog integrado</p>
                            </ProjectInfo>
                        </Image>
                    </ProjectCard>
                    <ProjectCard>
                        <Image>
                            <ProjectInfo>
                                <h2>dotStation</h2>
                                <p>Portifólio com blog integrado</p>
                            </ProjectInfo>
                        </Image>
                    </ProjectCard>
                    <ProjectCard>
                        <Image>
                            <ProjectInfo>
                                <h2>dotStation</h2>
                                <p>Portifólio com blog integrado</p>
                            </ProjectInfo>
                        </Image>
                    </ProjectCard>
                    <ProjectCard>
                        <Image>
                            <ProjectInfo>
                                <h2>dotStation</h2>
                                <p>Portifólio com blog integrado</p>
                            </ProjectInfo>
                        </Image>
                    </ProjectCard>
                    <ProjectCard>
                        <Image>
                            <ProjectInfo>
                                <h2>dotStation</h2>
                                <p>Portifólio com blog integrado</p>
                            </ProjectInfo>
                        </Image>
                    </ProjectCard>
                </ProjectList>
            </ProjectsContainer>
        </Container>
    )
}