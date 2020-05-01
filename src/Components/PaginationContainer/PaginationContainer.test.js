import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import PaginationContainer from './PaginationContainer';

test('renders learn react link', () => {
    const { getByText } = render(<PaginationContainer />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
