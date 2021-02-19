import {Container} from './styled'
import PostList from '../PostList'
import PageNavigator from '../PageNavigator'

export default function BlogContent({posts}){
    return (
        <Container>
            <PostList posts={posts}/>
            <PageNavigator />
        </Container>
    )
}