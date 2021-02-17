import PostCard from '../PostCard'
import {Container} from './styles'

const posts = [
    {
        title: "Como construir um blog utilizando React, Next, Node e Styled Components",
        href: "http-slug-link",
        metadata: {
            id: '1',
            date: "17/02/2021"
        }
    },
    {
        title: "Como alimentar uma girafa",
        href: "http-slug-link",
        metadata: {
            id: '2',
            date: "18/02/2021"
        }
    },
    {
        title: "Como construir um foguete",
        href: "http-slug-link",
        metadata: {
            id: '3',
            date: "19/02/2021"
        }
    }
]

export default function PostList() {
    return (
        <Container>
            {posts.map(post => (
                <PostCard key={post.metadata.id} href={post.href} title={post.title} metadata={post.metadata}/>
            ))}
        </Container>
    )
}