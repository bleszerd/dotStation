import {Slug} from '../../helpers/slug'
import API from '../../API'

export default function PostPage({post}) {
    return (
        <div>
            <p>{post._id}</p>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.content}</p>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const id = Slug.getId(context.params.slug)
    const response = await API.get(`blog/posts/findbyid/${id}`)
    const post = response.data.responseData

    return {
        props: {
            post
        }
    }
}