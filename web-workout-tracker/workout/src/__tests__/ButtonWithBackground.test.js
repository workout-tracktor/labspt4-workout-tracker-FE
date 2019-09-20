import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import ButtonWithBackground from '../components/ButtonWithBackground.js';

it('should render', () => {
    render(<ButtonWithBackground />);
});

it('renders 2 buttons - 1 for each view', () => {
    const { queryAllByTestId } = render(<ButtonWithBackground />);
    const buttons = queryAllByTestId("body-goal");
    expect(buttons.length).toBe(2); // 1 for desktop and 1 for mobile view
});

it('should display goals', () => {
    const goal = "Slim down";
    const { getAllByText } = render(<ButtonWithBackground text={goal} />);
    const buttons = getAllByText(/slim down/i);
    expect(buttons.length).toBe(2);
})