import Amplify from "aws-amplify"
import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"
import config from "./aws-exports"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

Amplify.configure(config)

const theme = {
  colors: {
    white: "#FFFFFF",
    easternBlue: "#047D95",
    whiteSmoke: "#F0F0F0",
    black: "#000000",
  },
  font: "Roboto",
  fontSizes: {
    small: "0.75em",
    medium: "0.85em",
    large: "1em",
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
