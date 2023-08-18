import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";

const App = () => {
    return (
        <Header />
    )
}

// const appRouter = createBrowser

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)