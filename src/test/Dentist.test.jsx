import { render, screen, fireEvent } from '@testing-library/react'
import Form from '../Components/Form'


test('Verify that the username entered has more than 4 letters', async () => { 
    render(<Form />)
    
    const inputUsername = screen.getByLabelText("username");
    fireEvent.change(inputUsername, {target: {value: 'Maria'}});

    const inputEmail = screen.getByLabelText("email");
    fireEvent.change(inputEmail, {target: {value: "mariac@gmail.com"}});

    const buttonSubmit = screen.getByRole("button", {name: /Send/i });
    fireEvent.click(buttonSubmit);

    const paragraphSubmit = await screen.findByText(/Thank you Maria, we will contact you as soon as possible, by email/)
    
    expect(paragraphSubmit).toBeInTheDocument();
}); 


test('Verify that all form components render', () => {
        const inputName = screen.getByLabelText("name");
        const inputEmail = screen.getByLabelText("email");
        const buttonSubmit = screen.getByRole("button", {name: /Send/i})

        expect(inputName).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(buttonSubmit).toBeInTheDocument();
    });
