import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { Container, MenuContainer, LogoContainer, LogoMenuWrapper, ButtonsWrapper } from './styles'
import { useNavbar } from '../../../context/navbar'

export default function Header() {
    const { navbar, navController } = useNavbar()

    return (
        <Container>
            <LogoMenuWrapper>
                <MenuContainer onClick={navController.handleStatus} active={navbar.opened}>
                    <BsFillGrid3X3GapFill />
                </MenuContainer>
                <LogoContainer>
                    <a href="/">
                        <h2>dotStation</h2>
                    </a>
                </LogoContainer>
            </LogoMenuWrapper>
            <ButtonsWrapper>
                <a href="/">Início</a>
                <a href="/blog">Blog</a>
            </ButtonsWrapper>
        </Container>
    )
}