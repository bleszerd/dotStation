import { Slug } from '../../helpers/slug'
import API from '../../API'
import Header from '../../components/Blog/Header'
import PostContent from '../../components/Blog/PostContent'
import Footer from '../../components/Global/Footer'

export default function PostPage({ post }) {
    return (
        <>
            <title>{post.title} - dotStation</title>

            <Header />
            <PostContent post={post}/>
            <Footer />
        </>
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