/**
 * skenario testing LoginForm
 *    - should handle email typing correctly
 *    - should handle password typing correctly
 *    - should call login function when login button is clicked
 */

import * as React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginForm from './LoginForm';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginForm onLogin={() => {}} />);

    const emailInput = await screen.getByPlaceholderText('email');
    // Action
    await userEvent.type(emailInput, 'tanjiro11@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('tanjiro11@gmail.com');
  });
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginForm onLogin={() => {}} />);

    const passwordInput = await screen.getByPlaceholderText('password');
    // Action
    await userEvent.type(passwordInput, '123123');

    // Assert
    expect(passwordInput).toHaveValue('123123');
  });
  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginForm onLogin={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('email');
    await userEvent.type(emailInput, 'tanjiro11@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('password');
    await userEvent.type(passwordInput, '123123');
    const loginButton = await screen.getByRole('button');

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'tanjiro11@gmail.com',
      password: '123123',
    });
  });
});
