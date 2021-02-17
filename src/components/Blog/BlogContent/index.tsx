import {Container} from './styled'
import PostList from '../PostList'
import PageNavigator from '../PageNavigator'

export default function BlogContent(){
    return (
        <Container>
            <PostList />
            <PageNavigator />
        </Container>
    )
}