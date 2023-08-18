import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MoviesList from "./src/components/MoviesList";
import MovieDetails from "./src/components/MovieDetails";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MoviesList />
            },
            {
                path: "/detail",
                element: <MovieDetails />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)