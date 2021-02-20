import { BlogLink, Container, ImageContainer, TextContainer, TextWrapper } from './styles'

export default function ProjectCard({ project }) {
    return (
        <Container>
            <BlogLink href={project.blogURL}>
                <ImageContainer image={project.image}>
                    <TextContainer>
                        <TextWrapper>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </TextWrapper>
                    </TextContainer>
                </ImageContainer>
            </BlogLink>
        </Container>
    )
}