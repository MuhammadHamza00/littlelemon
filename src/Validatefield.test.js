import React from 'react';
import { render } from '@testing-library/react';
import BookForm from './BookForm';

test('HTML5 validation attributes are applied', () => {
  const { getByLabelText } = render(<BookForm />);

  // Check for the "required" attribute on the "Enter Name" input field
  const nameInput = getByLabelText('Enter Name');
  expect(nameInput).toHaveAttribute('required');

  // Check for the "required" attribute on the "Enter Email" input field
  const emailInput = getByLabelText('Enter Email');
  expect(emailInput).toHaveAttribute('required');

  // Add similar checks for other input fields as needed
});
