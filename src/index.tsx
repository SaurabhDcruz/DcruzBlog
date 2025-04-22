import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Find root element or create one if it doesn't exist
let rootElement = document.getElementById("root")
if (!rootElement) {
  rootElement = document.createElement("div")
  rootElement.id = "root"
  document.body.appendChild(rootElement)
}

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
