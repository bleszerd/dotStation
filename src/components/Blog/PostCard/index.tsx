import { Container, OverlayAndInfo } from './styles'

export default function PostCard({title, id, metadata, image}: IPostCardProps) {
    return (
        <Container image={image}>
            <OverlayAndInfo>
                <h2>{title}</h2>
                <p>por <a href="https://twitter.com/bleszerd/">Vinícius Resende</a>, {metadata.date}.</p>
            </OverlayAndInfo>
        </Container>
    )
}