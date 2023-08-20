import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MoviesList from "./src/components/MoviesList";
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

const MovieDetails = lazy(() => import("./src/components/MovieDetails"))

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
                element: (
                    <Suspense fallback={<h1> Loading... </h1>}>
                        <MovieDetails />
                    </Suspense>
                )
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)