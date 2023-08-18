import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MoviesList from "./src/components/MoviesList";
import MovieDetails from "./src/components/MovieDetails";
import store from "./src/store";
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
        </Provider>
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
                path: "/detail/:id",
                element: <MovieDetails />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)