import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import { BodyGoal } from '../views/BodyGoal.js';

it('should render', () => {
    render(<BodyGoal />);
});

it('renders a header "What\'s your goal?"', () => {
    const { queryByTestId } = render(<BodyGoal />);
    const renderedHeader = queryByTestId("body-goal-header").textContent;
    const requiredText = "What's your goal?";
    expect(renderedHeader).toEqual(requiredText);
});

it('renders 8 body goals - 4 for each view', () => {
    const { queryAllByTestId } = render(<BodyGoal />);
    const goalsButtons = queryAllByTestId("body-goal");
    expect(goalsButtons.length).toBe(8); // 4 for desktop and 4 for mobile view
});

it('renders 1 option button', () => {
    const { queryAllByTestId } = render(<BodyGoal />);
    const optionsButtons = queryAllByTestId("option-button");
    expect(optionsButtons.length).toBe(1); // "Select" button is not rendering from the start 
});

it('renders 2 option buttons when user choose body goal option', () => {
    const { queryAllByTestId } = render(<BodyGoal />);
    const goalButton = queryAllByTestId("body-goal")[0];
    fireEvent.click(goalButton);

    const optionsButtons = queryAllByTestId("option-button");
    expect(optionsButtons.length).toBe(2);
});