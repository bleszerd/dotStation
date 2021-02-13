import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import { Container, Icon } from './styles'

export default function SocialIcons() {
    return (
        <Container>
            <Icon href="https://www.linkedin.com/in/viniciusresend3/" target="_blank">
                <FaLinkedin />
            </Icon>
            <Icon href="https://www.github.com/bleszerd/" target="_blank">
                <FaGithub />
            </Icon>
            <Icon href="https://www.twitter.com/bleszerd/" target="_blank">
                <FaTwitter />
            </Icon>
            <Icon href="mailto:alive2k@programmer.net">
                <FaEnvelope />
            </Icon>
        </Container>
    )
}