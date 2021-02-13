import { Container, TextContainer, Binary } from './styles'

export default function WelcomeContent() {
    return (
        <Container>
            <TextContainer>
                <Binary>01010110 01101001 01101110 11101101 01100011 01101001 01110101 01110011 00100000 01010010 01100101 01110011 01100101 01101110 01100100 01100101 </Binary>
                <div>
                    <h2>Sobre o dev</h2>
                    <p> Já teve aquela sensação de estar há alguns minutos fazendo algo divertido e olhar pela janela percebendo que na verdade já está escuro e se passaram horas e horas? Pois é, já me aconteceu inúmeras vezes enquanto eu construia meus projetos e aplicações, não há nada mais divertido que aprender coisas novas, especialmente quando você gosta de novas experiências e, principalmente, <b>do que faz</b>.</p>
                </div>
            </TextContainer>
        </Container>
    )
}