/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';

import { RootState, AppStore, setupStore } from '@/store';
import { GlobalStyles, theme } from '@/styles';

interface ExtendedRenderOptions
  extends Omit<RenderOptions, 'queries' | 'wrapper'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

interface AllTherProvidersProps {
  children: React.ReactNode;
}

export const renderWithProviers = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...options
  }: ExtendedRenderOptions = {}
) => {
  const AllTheProviders = ({
    children,
  }: AllTherProvidersProps): React.ReactElement => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  const returns = render(ui, { wrapper: AllTheProviders, ...options });

  return { store, ...returns };
};

export * from '@testing-library/react';
export { renderWithProviers as render };
