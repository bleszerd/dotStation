import { Container, NavigatorWrapper } from './styles'

export default function PageNavigator() {
    return (
        <Container>
            <NavigatorWrapper>
                <li>
                    <a>&#60;=</a>
                </li>
                <li>
                    <a>1</a>
                </li>
                <li>
                    <a>2</a>
                </li>
                <li>
                    <a>3</a>
                </li>
                <p>...</p>
                <li>
                    <a>=45</a>
                </li>
                <li>
                    <a>=&#62;</a>
                </li>
            </NavigatorWrapper>
        </Container>
    )
}