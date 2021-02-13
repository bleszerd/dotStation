// import original module declarations
import 'styled-components';

//Typing theme
declare module 'styled-components' {
    export interface DefaultTheme {
      colors: {
        purple: string,
        purpink: string,
        iceCream: string,
        summer: string,
        sand: string,
        yellow: string,
        text: string,
        textGray: string,
        textDark: string,
        AtextDark: string,
        background: string,
      },
    }
  }