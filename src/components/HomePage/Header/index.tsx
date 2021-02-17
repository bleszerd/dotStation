import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { Container, MenuContainer, LogoContainer } from './styles'
import { useNavbar } from '../../../context/navbar'

export default function Header() {
    const { navbar, navController } = useNavbar()

    return (
        <Container>
            <MenuContainer onClick={navController.handleStatus} active={navbar.opened}>
                <BsFillGrid3X3GapFill />
            </MenuContainer>
            <LogoContainer>
                <h2>dotStation</h2>
            </LogoContainer>
        </Container>
    )
}