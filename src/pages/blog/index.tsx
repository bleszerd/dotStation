import API from '../../API'

import Header from "../../components/Blog/Header";
import BlogContent from "../../components/Blog/BlogContent";

import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";

export default function Blog({posts}){
    return (
        <>
            <title>dotStation - Blog</title>

            <Navbar />
            <Header />
            <BlogContent posts={posts}/>
            <Footer />
        </>
    )
}

export async function getStaticProps(context) {
    const response = await API.get("/blog/posts/")
    const posts = response.data.responseData

    return {
      props: {
          posts
      },
    }
  }