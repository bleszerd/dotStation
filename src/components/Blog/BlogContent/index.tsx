import {Container} from './styled'
import PostList from '../PostList'
import PageNavigator from '../PageNavigator'

export default function BlogContent({posts, pagination}){
    return (
        <Container>
            <PostList posts={posts}/>
            <PageNavigator pagination={pagination}/>
        </Container>
    )
}