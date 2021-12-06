import { render, screen, fireEvent } from '@testing-library/react'
import AddToList from '../AddToList'

const mockedAddItemToList = jest.fn()
const ref = {current: ""}


describe("AddToList", () => {
    it('should render input element', async () => {
        render(
            <AddToList
                addItemToList={mockedAddItemToList}
                itemRef={ref}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new anime.../i)
        expect(inputElement).toBeInTheDocument()
    })

    it('should be able write input', async () => {
        render(
            <AddToList
                addItemToList={mockedAddItemToList}
                itemRef={ref}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new anime.../i)
        fireEvent.change(inputElement, { target: {value: "One Piece" } })
        expect(inputElement.value).toBe("One Piece")
    })

    it('should have empty input when add buttom is clicked', async () => {
        render(
            <AddToList
                addItemToList={mockedAddItemToList}
                itemRef={ref}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new anime.../i)
        const buttonElement = screen.getByRole("button", { name: /Add/i})
        fireEvent.change(inputElement, { ref: {value: "One Piece" } })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    })

    it('should have empty input when press enter key', async () => {
        render(
            <AddToList
                addItemToList={mockedAddItemToList}
                itemRef={ref}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new anime.../i)
        const formElement = screen.getByTestId("form-add-list")
        fireEvent.change(inputElement, { ref: {value: "One Piece" } })
        fireEvent.submit(formElement)
        expect(inputElement.value).toBe("")
    })
})