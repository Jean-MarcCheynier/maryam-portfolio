import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layer from './Layer';

describe('<Layer />', () => {
  test('it should mount', () => {
    render(<Layer />);

    const Layer = screen.getByTestId('Layer');

    expect(Layer).toBeInTheDocument();
  });
});