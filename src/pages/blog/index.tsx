import Header from "../../components/Blog/Header";
import BlogContent from "../../components/Blog/BlogContent";

import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";

export default function Blog(){
    return (
        <>
            <title>dotStation - Blog</title>

            <Navbar />
            <Header />
            <BlogContent />
            <Footer />
        </>
    )
}