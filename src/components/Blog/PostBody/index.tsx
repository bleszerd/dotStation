import { Markdown } from '../../../helpers/markdown'
import { MarkdownContainer, Container } from './styles'

export default function PostBody({ content }) {
    return (
        <Container>
            <MarkdownContainer>
                <div dangerouslySetInnerHTML={{
                    __html: Markdown.parseToHTML(content)
                }} />
            </MarkdownContainer>
        </Container>
    )
}