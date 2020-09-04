import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
    const header = screen.getByText(/react plants/i)
    expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first name:/i)
    expect(firstName).toBeTruthy()
    fireEvent.change(firstName, {target:{value:'Ashton'}})

    const lastName = screen.getByLabelText(/last name:/i)
    expect(lastName).toBeTruthy()
    fireEvent.change(lastName, {target:{value:'Ashton'}})

    const address = screen.getByLabelText(/address:/i)
    expect(address).toBeTruthy()
    fireEvent.change(address, {target:{value:'724 florence'}})

    const city = screen.getByLabelText(/city:/i)
    expect(city).toBeTruthy()
    fireEvent.change(city, {target:{value:'taylorville'}})

    const state = screen.getByLabelText(/state:/i)
    expect(state).toBeTruthy()
    fireEvent.change(state, {target:{value:'illinois'}})

    const zip = screen.getByLabelText(/zip:/i)
    expect(zip).toBeTruthy()
    fireEvent.change(zip, {target:{value:'62568'}})

    const submit = screen.getByText(/submit order/i)
    expect(submit).toBeTruthy()
    fireEvent.click(submit)

    const success = screen.getByText(/you have ordered some plants/i)
    expect(success).toBeTruthy()




});
