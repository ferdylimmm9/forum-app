/**
 * skenario testing LoginForm
 *    - should handle email typing correctly
 *    - should handle name typing correctly
 *    - should handle password typing correctly
 *    - should call register function when register button is clicked
 */

import * as React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterForm from './RegisterForm';

expect.extend(matchers);

describe('RegisterForm component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterForm onRegister={() => {}} />);

    const emailInput = await screen.getByPlaceholderText('email');
    // Action
    await userEvent.type(emailInput, 'tanjiro11@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('tanjiro11@gmail.com');
  });
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterForm onRegister={() => {}} />);

    const nameInput = await screen.getByPlaceholderText('name');
    // Action
    await userEvent.type(nameInput, 'tanjiro');

    // Assert
    expect(nameInput).toHaveValue('tanjiro');
  });
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterForm onRegister={() => {}} />);

    const passwordInput = await screen.getByPlaceholderText('password');
    // Action
    await userEvent.type(passwordInput, '123123');

    // Assert
    expect(passwordInput).toHaveValue('123123');
  });
  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterForm onRegister={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('name');
    await userEvent.type(nameInput, 'tanjiro');
    const emailInput = await screen.getByPlaceholderText('email');
    await userEvent.type(emailInput, 'tanjiro11@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('password');
    await userEvent.type(passwordInput, '123123');
    const loginButton = await screen.getByRole('button');

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'tanjiro',
      email: 'tanjiro11@gmail.com',
      password: '123123',
    });
  });
});
