import { createGlobalStyle, ThemeProvider } from 'styled-components'

//CSS Reset
const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
//Themes
const theme = {
  colors: {
    //primary: '#000000',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}