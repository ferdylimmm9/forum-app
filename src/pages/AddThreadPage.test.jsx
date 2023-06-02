/**
 * skenario testing LoginForm
 *    - should handle title typing correctly
 *    - should handle category typing correctly
 */

import * as React from 'react';
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddThreadPage from './AddThreadPage';
import store from '../states';

expect.extend(matchers);

describe('AddThreadPage component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddThreadPage />
        </BrowserRouter>
      </Provider>
    );

    const titleInput = await screen.getByPlaceholderText('judul');
    // Action
    await userEvent.type(
      titleInput,
      'Incididunt nisi adipisicing aliquip elit occaecat ea.'
    );

    // Assert
    expect(titleInput).toHaveValue(
      'Incididunt nisi adipisicing aliquip elit occaecat ea.'
    );
  });
  it('should handle category typing correctly', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddThreadPage />
        </BrowserRouter>
      </Provider>
    );

    const categoryInput = await screen.getByPlaceholderText('kategori');
    // Action
    await userEvent.type(
      categoryInput,
      'Ea sit est aliquip dolore adipisicing enim fugiat.'
    );

    // Assert
    expect(categoryInput).toHaveValue(
      'Ea sit est aliquip dolore adipisicing enim fugiat.'
    );
  });
});
