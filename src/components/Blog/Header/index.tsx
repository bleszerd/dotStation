import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { Container, MenuContainer, Logo, LogoContainer, LogoMenuWrapper, ButtonsWrapper } from './styles'
import { useNavbar } from '../../../context/navbar'
import Navbar from '../../Global/Navbar'

export default function Header() {
    const { navbar, navController } = useNavbar()

    return (
        <Container>
            <Navbar />
            <LogoMenuWrapper>
                <MenuContainer onClick={navController.handleStatus} active={navbar.opened}>
                    <BsFillGrid3X3GapFill />
                </MenuContainer>
                <LogoContainer>
                    <Logo>
                        <a href="/blog">dotStation</a>
                    </Logo>
                </LogoContainer>
            </LogoMenuWrapper>
            <ButtonsWrapper>
                <a href="/">Início</a>
                <a href="/blog">Blog</a>
            </ButtonsWrapper>
        </Container>
    )
}