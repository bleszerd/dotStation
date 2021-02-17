import Header from '../../HomePage/Header'
import { Container, Button, ButtonsArea, Copy } from './styles'
import { ImHome3, ImParagraphLeft } from 'react-icons/im'
import {useNavbar} from '../../../context/navbar'

export default function Navbar() {
    const {navbar, navController} = useNavbar()

    return (
        <Container opened={navbar.opened}>
            <ButtonsArea>
                <Button href="/">
                    <ImHome3 />
                    <h3>Início</h3>
                </Button>
                <Button href="/blog">
                    <ImParagraphLeft />
                    <h3>Blog</h3>
                </Button>
            </ButtonsArea>
            <Copy>
                <small>Feito com ❤ por <a href="https://twitter.com/bleszerd/">Vinícius Resende</a>.</small>
            </Copy>
        </Container>
    )
}