import { Container, SubContainer, ProjectsContainer, ProjectInfo, ProjectList, ProjectCard, Image } from './styles'

export default function Projects() {
    return (
        <Container>
            <SubContainer>
            <h2>Projects</h2>
            <ProjectsContainer>
                <ProjectList>
                    <h2 style={{padding: '10rem 0', background: 'rgba(0, 0, 0, .3)', border: 'solid yellow 1px' ,borderRadius: '.25rem'}}>EM BREVE...</h2>
                    <h2 style={{padding: '10rem 0', background: 'rgba(0, 0, 0, .3)', border: 'solid yellow 1px' ,borderRadius: '.25rem'}}>EM BREVE...</h2>
                    <h2 style={{padding: '10rem 0', background: 'rgba(0, 0, 0, .3)', border: 'solid yellow 1px' ,borderRadius: '.25rem'}}>EM BREVE...</h2>
                    <h2 style={{padding: '10rem 0', background: 'rgba(0, 0, 0, .3)', border: 'solid yellow 1px' ,borderRadius: '.25rem'}}>EM BREVE...</h2>
                    {/* <ProjectCard>
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
                    </ProjectCard> */}
                </ProjectList>
            </ProjectsContainer>
            </SubContainer>
        </Container>
    )
}