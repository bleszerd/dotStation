import 'styled-components';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'
import NavbarProvider from '../context/navbar'

//Themes
const theme: DefaultTheme = {
  colors: {
    purple: "#6D4891",
    purpink: "#B55190",
    iceCream: "#EB6880",
    summer: "#FF906B",
    sand: "#FFC35E",
    yellow: "#F9F871",
    text: "#ffffff",
    textGray: "#bbbbbb",
    textDark: "#161b3d",
    AtextDark: "rgba(22, 27, 61, .4)",
    background: '#eeeeee',
  },
}

//CSS Reset
const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background: ${theme.colors.background};
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NavbarProvider>
    </>
  )
}