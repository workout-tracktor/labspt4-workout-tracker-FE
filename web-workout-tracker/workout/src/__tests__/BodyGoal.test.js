import React from 'react';
import { render } from '@testing-library/react';
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
