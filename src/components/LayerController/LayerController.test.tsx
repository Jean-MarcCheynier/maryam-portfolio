import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LayerController from './LayerController';

describe('<LayerController />', () => {
  test('it should mount', () => {
    render(<LayerController />);

    const LayerController = screen.getByTestId('LayerController');

    expect(LayerController).toBeInTheDocument();
  });
});