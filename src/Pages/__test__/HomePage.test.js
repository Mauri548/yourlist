import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../HomePage';

const addItem = (items) => {
    console.log(items)
    const inputElement = screen.getByPlaceholderText(/Add a new anime.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i})
    items.forEach(item => {
        console.log(item)
        fireEvent.change(inputElement, { target: { value: item } })
        fireEvent.click(buttonElement)
    })
}

describe("HomePage", () => {
    // it('should render same text passed into input', async () => {
    //     render(
    //         <HomePage />
    //     )
    //     addItem(["Naruto"])
    //     const divElement = screen.getByText(/Naruto/i)
    //     expect(divElement).toBeInTheDocument()
    // })

    it('should render multiple items', async () => {
        render(
            <HomePage />
        )
        addItem(["Clanned","Boku no Heroe","One Puchman"])
        const divElements = screen.getAllByTestId("item-conteiner")
        expect(divElements.length).toBe(3)
    })
})