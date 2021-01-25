import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Loader from ".";

describe('<Loader />', () => {
	const loadingMessageValue = 'Loading...';

	it('should render loading message', () => {
		const container = render(<Loader /> );
		expect(container.getByText(loadingMessageValue)).toBeInTheDocument();
	});
});