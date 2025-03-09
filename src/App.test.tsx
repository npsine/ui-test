import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header-text');
  const headerContentElement = screen.getByTestId('header-content');
  const descriptionElement = screen.getByTestId('description');
  const approvalInfoDetailsElement = screen.getByTestId('approval-info-details');
  const termsConditionsElement = screen.getByTestId('terms-conditions');
  const actionButtonElement = screen.getByTestId('action-button');

  expect(headerElement).toBeInTheDocument();
  expect(headerContentElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(approvalInfoDetailsElement).toBeInTheDocument();
  expect(termsConditionsElement).toBeInTheDocument();
  expect(actionButtonElement).toBeInTheDocument();
});
