'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px === 10px/16px = 62.5% -> 1.4rem = 14px
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-famyly: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-sarif;
  }
`