import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Nav from "./components/nav"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Nav />
  </React.StrictMode>
)
