import PostCard from '../PostCard'
import { Container, ContainerLink } from './styles'
import { Slug } from '../../../helpers/slug'

export default function PostList({posts}) {

    return (
        <Container>
            {posts.map(post => (
                <ContainerLink href={`/blog/${Slug.generate(post.title, post._id)}`}>
                    {
                        console.log(Slug.generate(post.title, post._id))
                        
                    }
                    <PostCard image={post.image} key={post._id} id={post._id} title={post.title} metadata={{date: post.date, author: post.author}} />
                </ContainerLink>
            ))}
        </Container>
    )
}