import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {Container, MenuContainer, LogoContainer} from './styles'

export default function Header(){
    return (
        <Container>
            <MenuContainer>
                <BsFillGrid3X3GapFill />
            </MenuContainer>
            <LogoContainer>
                <h2>dotStation</h2>
            </LogoContainer>
        </Container>
    )
}