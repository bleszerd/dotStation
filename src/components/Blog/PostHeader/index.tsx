import { Container, Image, Metadata, Title } from './styles'

export default function PostHeader({ id, image, title, metadata }) {

    return (
        <Container >
            <Image image={image} />
            <Title>{title}</Title>
            <Metadata>publicado em <b>{metadata.date}</b> por <a href="http://twitter.com/bleszerd">{metadata.author}</a></Metadata>
        </Container>
    )
}

/*
<PostCard id={post._id} image={post.image} title={post.title} metadata={{ id: post._id, date: "23/02/2021" }} key="" />
*/