import { render, screen } from "@testing-library/react"
import MovieDetails from "../MovieDetails"
import { Provider } from "react-redux"
import store from "../../store"
import { BrowserRouter } from "react-router-dom"
import { MOCK_DATA_CAST, MOCK_DATA_DETAIL } from "../__mock__/DetailMockData"
import { act } from "react-dom/test-utils"
import '@testing-library/jest-dom'

describe("Movie Details test cases", () => {

    global.fetch = jest.fn()

    fetch.mockResolvedValueOnce({
        json: async () => MOCK_DATA_DETAIL
    })

    fetch.mockResolvedValueOnce({
        json: async () => MOCK_DATA_CAST
    })

    // 'test' or 'it' both can be used interchangeably
    test("Title and rating should load properly", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <MovieDetails />
                    </Provider>
                </BrowserRouter>
            )
        })
        
        const title = screen.getByText("Oppenheimer")
        const rating = screen.getByText('(8.3)')

        expect(title).toBeInTheDocument();
        expect(rating).toBeInTheDocument();

        const parentElement = title.parentElement;
        expect(parentElement).toHaveClass('title_rating');
    })

    test("Year, Length, Director should load properly", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Provider store={store}>
                        <MovieDetails />
                    </Provider>
                </BrowserRouter>
            )
        })
        const year = screen.getByText('2023 |')
        const length = screen.getByText('3 hrs 1 minutes |')
        const director = screen.getByText('Christopher Nolan')

        expect(year).toBeInTheDocument()
        expect(length).toBeInTheDocument()
        expect(director).toBeInTheDocument()
    })

    test("Cast members should load properly", async () => {
        await act (async () => {
            render (
                <BrowserRouter>
                    <Provider store={store}>
                        <MovieDetails />
                    </Provider>
                </BrowserRouter>
            )
        })

        const cast = screen.getByText("Cast:")
        const cast_members = cast.nextSibling;
        expect(cast).toBeInTheDocument();
        expect(cast_members).toBeInTheDocument();
        expect(cast_members.textContent.split(',').length).toBe(82);
    })

    test("Description section should load properly", async () => {
        await act (async () => render (
            <BrowserRouter>
                <Provider store={store}>
                    <MovieDetails />
                </Provider>
            </BrowserRouter>
        ))
        const description = screen.getByText('Description: The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.');
        expect(description).toBeInTheDocument();
        expect(description).toHaveClass('overview');
    })
})