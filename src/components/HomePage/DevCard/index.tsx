import SocialIcons from '../SocialIcons'
import { Container, CardWrapper, DevInfo } from './styles'


export default function DevCard() {
    return (
        <Container>
            <CardWrapper>
                <img src="images/devPhoto.jpeg" />
                <DevInfo>
                    <h2>Vinícius A. Resende</h2>
                    <b>20 Anos</b>
                    <small>Dev. há mais de <b>4 anos</b>.</small>
                    <SocialIcons />
                </DevInfo>
            </CardWrapper>
        </Container>
    )
}