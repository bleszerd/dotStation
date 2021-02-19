import PostCard from '../PostCard'
import { Container, ContainerLink } from './styles'
import {Slug} from '../../../helpers/slug'

export default function PostList({posts}) {
    

    return (
        <Container>
            {posts.map(post => (
                <ContainerLink href={`/blog/${Slug.generate(post.title, post._id)}`}>
                    <PostCard image={post.image} key={post._id} id={'aaa'} title={post.title} metadata={{date: '18/02/2021', id: '03'}} />
                </ContainerLink>
            ))}
        </Container>
    )
}