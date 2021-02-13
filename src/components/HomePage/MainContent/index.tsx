import { Container } from './styles'
import WelcomeContent from '../WelcomeContent'
import DevCard from '../DevCard'
import ChartGraph from '../ChartGraph'
import Projects from '../Projects'

export default function MainContent() {
    return (
        <Container>
            <WelcomeContent />
            <DevCard />
            <ChartGraph />
            <Projects />
        </Container>
    )
}