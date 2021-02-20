import API from '../../API'

import Header from "../../components/Blog/Header";
import BlogContent from "../../components/Blog/BlogContent";

import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";

export default function Blog({ posts, paginationInfo }) {
    return (
        <>
            <title>dotStation - Blog</title>

            <Navbar />
            <Header />
            <BlogContent posts={posts} pagination={paginationInfo}/>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const pageQuery = context.query.page || 1
    console.log(pageQuery);
    
    
    const response = await API.get(`/blog/posts?page=${pageQuery}`)
    const posts = response.data.responseData.docs

    const { totalDocs, totalPages, page, pagingCounter } = response.data.responseData

    const paginationInfo = {
        totalDocs,
        totalPages,
        page,
        pagingCounter
    }

    return {
        props: {
            posts,
            paginationInfo
        },
    }
}