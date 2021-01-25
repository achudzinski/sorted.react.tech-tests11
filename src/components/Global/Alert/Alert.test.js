import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert from ".";

describe('<Alert />', () => {
	const expectedAlertMessage = 'Test alert';

	it('should render alert message', () => {
		const container = render(<Alert>{expectedAlertMessage}</Alert> );
		expect(container.getByText(expectedAlertMessage)).toBeInTheDocument();
	});
});