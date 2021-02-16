import { Bar } from 'react-chartjs-2';
import {Container, ChartWrapper, Hint, GraphText} from './styles'

const data = {
    labels: ['Conhecimento (0 ~ 10)'],
    datasets: [
        {
            label: "NodeJS",
            data: [
                8.1
            ],
            backgroundColor: [
                'rgba(0, 140, 0, 1)',
            ],
        },
        {
            label: "ReactJS",
            data: [
                8.5
            ],
            backgroundColor: [
                'rgba(50, 100, 180, 1)',
            ]
        },
        {
            label: "Vanilla JavaScript",
            data: [
                9.0
            ],
            backgroundColor: [
                'rgba(255, 180, 100, 1)',
            ]
        },
        {
            label: "TypeScript",
            data: [
                6.1
            ],
            backgroundColor: [
                'rgba(20, 20, 200, 1)',

            ]
        },
        {
            label: "React Native",
            data: [
                2.1
            ],
            backgroundColor: [
                'rgba(140, 0, 160, 1)',

            ]
        },
        {
            label: "NextJS",
            data: [
                6.8
            ],
            backgroundColor: [
                'rgba(140, 140, 140, 1)',

            ]
        },
    ]
}

export default function Charts() {
    return (
        <Container>
            <ChartWrapper>
                <Hint>Dica: selecione uma opção abaixo para oculta-la</Hint>
                <Bar
                    data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            fontColor: 'rgba(255, 255, 255, 1)',
                            text: 'Chart.js Radar Chart',
                        },
                        legend: {
                            labels:{
                                fontColor: "white",
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: 'white',
                                    suggestedMin: 0,
                                    beginAtZero: true,
                                    max: 10,
                                }
                            }],
                            xAxes: [{
                                fontColor: 'white',
                            }]
                        }
                    }}
                />
            </ChartWrapper>
            <GraphText>
                <h2>A base é a chave para o sucesso.</h2>
                <p>A técnologia evolui constantemente, independentemente se você está preparado ou não.</p>
                <p>Ser um desenvolvedor é a cada dia aprender um pouco mais.</p>
                <p>Frameworks são legais, mas a base deles é ainda mais interessante e reutilizável.</p>
                <b>Não adianta ter um foguete e não saber dirigi-lo.</b>
            </GraphText>
        </Container>
    )
}