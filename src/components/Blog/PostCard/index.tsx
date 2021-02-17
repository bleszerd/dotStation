import { Container, OverlayAndInfo } from './styles'

export default function PostCard({title, href, metadata}: IPostCardProps) {
    return (
        <Container>
            <OverlayAndInfo href={href}>
                <h2>{title}</h2>
                <p>por <a href="https://twitter.com/bleszerd/">Vinícius Resende</a>, {metadata.date}.</p>
            </OverlayAndInfo>
        </Container>
    )
}