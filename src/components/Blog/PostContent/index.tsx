import PostHeader from '../PostHeader'
import PostBody from '../PostBody'
import { Container } from './styles'

export default function PostContent({ post }) {
    return (
        <Container>
            <PostHeader id={post._id} image={post.image} title={post.title} metadata={{ author: post.author, date: "23/02/2021" }} />
            <PostBody content={post.content} />
        </Container>
    )
}